"use server";
import { profileSchema } from "./schema";
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const data = Object.fromEntries(formData);
    const validatedData = profileSchema.parse(data);
    return { message: "Profile created successfully" };
  } catch (error) {
    console.log(error);
    return { message: "there was an error" };
  }
};
