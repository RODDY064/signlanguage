import { z } from 'zod';

export const SignInSchema = z.object({
  username: z.string().email({ message: "Invalid username" }),
  password: z.string().min(1, { message: "Password cannot be empty" })
});

export const CreateUserSchema = z.object({
  firstname: z.string().min(1, { message: "First Name cannot be empty" }),
  lastname: z.string().min(1, { message: "Last Name cannot be empty" }),
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


export const updateDataSchema = z.object({
  description: z.string().min(1, 'Description cannot be empty'),
  video: z
    .instanceof(File)
    .optional()
    .refine(file => !file || ['video/mp4', 'video/webm', 'video/ogg'].includes(file.type), {
      message: 'Invalid file type. Please upload a video file (MP4, WebM, Ogg).',
    })
    .refine(file => !file || file.size <= 20 * 1024 * 1024, {
      message: 'File size exceeds 20 MB. Please upload a smaller video.',
    }),
});

export type UpdateDataSchemaType = z.infer<typeof updateDataSchema>;