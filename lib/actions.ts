"use server";
import { profileSchema, imageSchema, rentalSchema } from "./schema";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validateWithZodSchema } from "./schema";
import { uploadImage } from "./supabase";

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("Please login to create profile");
  }
  if (!user.privateMetadata.hasProfile) {
    redirect("/profiles/create");
  }
  return user;
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  const User = await currentUser();
  if (!User) throw new Error("Please login to create profile");
  try {
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
        clerkId: user.id,
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
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
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
