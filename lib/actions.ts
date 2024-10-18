"use server";
import { profileSchema } from "./schema";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
