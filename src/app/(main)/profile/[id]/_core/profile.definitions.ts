import { z } from "zod";

export const DeleteProfileSchema = z.object({
  userId: z.string(),
});

export const EditProfileSchema = z
  .object({
    // userId: z.string(),
    name: z
      .string()
      .trim()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
    currentPassword: z
      .string()
      .trim()
      .min(8, {
        message: "La contraseña debe ser mayor a 8.",
      })
      .optional(),
    newPassword: z
      .string()
      .trim()
      .min(8, { message: "La contraseña debe ser mayor a 8" })
      .optional(),
    confirmPassword: z
      .string()
      .trim()
      .min(8, {
        message: "La contraseña debe ser mayor a 8.",
      })
      .optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    //En caso de ser falso
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // ruta de error
  });

export type EditProfileT = z.infer<typeof EditProfileSchema>;
