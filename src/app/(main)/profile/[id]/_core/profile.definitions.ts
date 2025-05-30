import { z } from "zod";

export const DeleteProfileSchema = z.object({
  userId: z.string(),
});

export const EditProfileUserSchema = z.object({
  // userId: z.string(),
  name: z
    .string()
    .trim()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
});
export type EditProfileUserT = z.infer<typeof EditProfileUserSchema>;

export const UpdatePasswordProfileUserSchema = z
  .object({
    currentPassword: z.string().trim().min(8, {
      message: "La contraseña debe ser mayor a 8.",
    }),
    newPassword: z
      .string()
      .trim()
      .min(8, { message: "La contraseña debe ser mayor a 8." }),
    confirmPassword: z.string().trim().min(8, {
      message: "La contraseña debe ser mayor a 8.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    //En caso de ser falso
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // ruta de error
  });
export type UpdatePasswordProfileUserT = z.infer<
  typeof UpdatePasswordProfileUserSchema
>;

export const UpdateAvatarProfileUserSchema = z.object({
  avatar: z.string().url(),
});
export type UpdateAvatarProfileUserT = z.infer<
  typeof UpdateAvatarProfileUserSchema
>;
