"use server";
import { profileSchema } from "./schema";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  try {
    const User = await currentUser();
    if (!User) throw new Error("Please login to create profile");
    const data = Object.fromEntries(formData);
    const validatedData = profileSchema.parse(data);

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
  try {
    const user = await getAuthUser();
    const data = Object.fromEntries(formData);
    const validatedData = profileSchema.parse(data);

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
