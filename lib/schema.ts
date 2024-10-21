import z, { unknown, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "first name should be greater than two" }),
  lastName: z
    .string()
    .min(2, { message: "last name should be greater than two" }),
  username: z
    .string()
    .min(2, { message: "user name should be greater than two" }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }

  return result.data;
}

export const imageSchema = z.object({
  image: validateImage(),
});

function validateImage() {
  const maxWidth = 1024 * 1024;
  const acceptedFileTypes = ["image/jpeg", "image/png", "image/gif"];

  return z
    .instanceof(File)
    .refine((file) => file.size <= maxWidth, "File size must be less than 1MB")
    .refine(
      (file) => acceptedFileTypes.includes(file.type),
      "File must be a valid image format (jpeg, png, gif)."
    );
}

export const rentalSchema = z.object({
  name: z.string().max(20),
  tagline: z.string().max(30),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words",
    }
  ),
  price: z.coerce.number().int().min(0),
  category: z.string(),
  country: z.string(),
  guests: z.coerce.number().int().min(0),
  bedroom: z.coerce.number().int().min(0),
  bed: z.coerce.number().int().min(0),
  bath: z.coerce.number().int().min(0),
  amenities: z.string(),
});
