import z from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "Name should be greater than two" }),
  lastName: z.string().min(2, { message: "Name should be greater than two" }),
  username: z.string(),
});
