import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().optional(),
  email: z.string().trim().email("Please enter a valid email address."),
  first_name: z
    .string()
    .trim()
    .min(2, "First name should be at least 2 characters.")
    .max(10, "First name should be max 10 characters."),
  last_name: z
    .string()
    .trim()
    .min(2, "Last name should be at least 2 characters.")
    .max(10, "Last name should be max 10 characters."),

  username: z
    .string()
    .trim()
    .min(4, "Username should be at least 4 characters.")
    .max(12, "Username should be max 12 characters."),
  password: z
    .string()
    .trim()
    .min(6, "Password should be at least 6 characters.")
    .max(15, "Password should be max 15 characters."),
});

export const LoginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, "Username should be at least 4 characters.")
    .max(12, "Username should be max 12 characters."),
  password: z
    .string()
    .trim()
    .min(6, "Password should be at least 6 characters.")
    .max(15, "Password should be max 15 characters."),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
