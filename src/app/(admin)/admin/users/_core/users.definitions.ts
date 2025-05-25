import { UserSchema } from "@/app/(auth)/_core/auth/user.types";
import { z } from "zod";

export const UserTableSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().nullable(),
  createdAt: z.date(),
  role: z.enum(["ADMIN", "USER"]),
  isEmailVerified: z.boolean(),
});
export type UserTableT = z.infer<typeof UserTableSchema>;

export const DeleteUserSchema = z.object({
  userId: z.string(),
});
export type DeleteUserT = z.infer<typeof DeleteUserSchema>;

export const AddUserFormSchema = UserSchema.extend({
  confirmPassword: z.string().trim().min(8, {
    message: "La contraseña debe ser mayor a 8.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  //En caso de ser falso
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], // ruta de error
});
export type AddUserFormT = z.infer<typeof AddUserFormSchema>;

export const EditUserFormSchema = UserSchema.pick({
  // email: true,
  id: true,
  name: true,
  role: true,
});
export type EditUserFormT = z.infer<typeof EditUserFormSchema>;
