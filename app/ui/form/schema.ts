import { z } from 'zod';

export const SignInSchema = z.object({
  username: z.string().email({ message: "Invalid username" }),
  password: z.string().min(1, { message: "Password cannot be empty" })
});

export const CreateUserSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  user_password: z.string().min(1, { message: "Password cannot be empty" })
});

export const UserSchema = z.object({
  type: z.enum(["signUp", "signIn"]),
  userData: z.union([SignInSchema, CreateUserSchema])
}).refine((data) => (data.type === "signIn" ? SignInSchema : CreateUserSchema).safeParse(data.userData).success,
 {
  message: "Invalid email and password",
  path: ["userData"],
});
