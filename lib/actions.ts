"use server";
import { profileSchema, imageSchema, rentalSchema } from "./schema";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validateWithZodSchema } from "./schema";
import { uploadImage } from "./supabase";

const getAuthUser = async () => {
  // const { userId } = auth();
  // if (!userId) redirect("/");
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profiles/create");

  return user;
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const User = await currentUser();
    if (!User) throw new Error("Please login to create profile");
    const data = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(profileSchema, data);
    //const data = getFormData(formData);
    //  console.log(data);

    await db.profile.create({
      data: {
        clerkId: User.id,
        email: User?.emailAddresses[0].emailAddress,
        profileImage: User.imageUrl ?? " ",
        ...validatedData,
      },
    });

    await clerkClient.users.updateUserMetadata(User.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : "An error has occurred",
    };
  }

  redirect("/");
};

export const fetchProfileImage = async () => {
  try {
    const user = await currentUser();
    if (!user) return null;

    const profile = await db.profile.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        profileImage: true,
      },
    });
    return profile?.profileImage;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) redirect("/profiles/create");
  return profile;
};
export const fetchProfileBYId = async ({ renterId }: { renterId: string }) => {
  const profile = await db.profile.findUnique({
    where: {
      clerkId: renterId,
    },
  });
  if (!profile) throw new Error("No profile with this renter Id");
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const data = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(profileSchema, data);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedData,
    });
  } catch (error) {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : "An error has occurred",
    };
  }
  return { message: "profile updated successfully" };
};

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validatedImage = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedImage.image);

    await db.profile.update({
      where: {
        clerkId: user?.id,
      },
      data: {
        profileImage: fullPath,
      },
    });

    revalidatePath("/");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return { message: `${error}` };
  }
};

export const createRentalsAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) return new Error("");
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  try {
    const data = Object.fromEntries(formData);
    const imageData = formData.get("image") as File;
    const validImage = validateWithZodSchema(imageSchema, { image: imageData });
    const fullPath = await uploadImage(validImage.image);
    //console.log(data);
    const validatedData = validateWithZodSchema(rentalSchema, data);
    await db.property.create({
      data: { ...validatedData, imageUrl: fullPath, renterId: user.id },
    });

    return {
      message: "property created succussefully",
    };
  } catch (error) {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : "An error has occurred",
    };
  }
  redirect("/");
};

export const fetchProperties = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { tagline: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ],
    },

    select: {
      id: true,
      name: true,
      price: true,
      tagline: true,
      imageUrl: true,
      country: true,
    },
  });
  return properties;
};

export const fetchSingleProperty = async ({
  propertyId,
}: {
  propertyId: string;
}) => {
  const property = await db.property.findUnique({
    where: {
      id: propertyId,
    },
  });

  if (!property) {
    throw new Error(`Property with ID ${propertyId} not found`);
  }

  return property;
};
export const deleteSingleProperty = async ({
  propertyId,
  pathname,
}: {
  propertyId: string;
  pathname: string;
}) => {
  const property = await db.property.delete({
    where: {
      id: propertyId,
    },
  });

  if (!property) {
    throw new Error(`Property with ID ${propertyId} not found`);
  }
  revalidatePath(pathname);
  return property;
};

export const fetchPersonalPoperty = async () => {
  const user = await getAuthUser();
  const property = await db.property.findMany({
    where: {
      renterId: user.id,
    },
    select: {
      id: true,
      name: true,
      price: true,
      tagline: true,
      imageUrl: true,
      country: true,
    },
  });

  if (!property) {
    throw new Error(`Property with ID not found`);
  }

  return property;
};

export const fetchFavorite = async ({ propertyId }: { propertyId: string }) => {
  const user = await getAuthUser();
  try {
    const favorite = await db.favorite.findFirst({
      where: {
        profileId: user.id,
        propertyId: propertyId,
      },
      select: {
        id: true,
      },
    });

    return favorite?.id;
  } catch (error) {
    console.log(error);
  }
};

export const toggleFavoriteAction = async (prevState: {
  propertyId: string;
  favoriteId: string | undefined;
  pathname: string;
}) => {
  const user = await getAuthUser();
  const { propertyId, favoriteId, pathname } = prevState;
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          profileId: user.id,
          propertyId,
        },
      });
    }
    revalidatePath(pathname);
    return {
      message: `${
        favoriteId
          ? "Property added to unfovorite."
          : "Property added to favorites"
      }`,
    };
  } catch (error) {
    return { message: "an error has occured" };
  }
};

export const fetchUserFavorite = async () => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      property: {
        select: {
          id: true,
          name: true,
          price: true,
          tagline: true,
          imageUrl: true,
          country: true,
        },
      },
    },
  });
  return favorite.map((favorite) => {
    return favorite.property;
  });
};
