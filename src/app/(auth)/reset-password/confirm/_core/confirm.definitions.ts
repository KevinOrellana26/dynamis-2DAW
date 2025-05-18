import { UserSchema } from "@/app/(auth)/_core/auth/user.types";
import { z } from "zod";

export const ResetPasswordFormSchema = UserSchema.pick({
  password: true,
})
  .extend({
    confirmPassword: z.string().trim().min(8, {
      message: "La contraseña debe ser mayor a 8.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    //En caso de ser falso
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // ruta de error
  });

export type ResetPasswordFormT = z.infer<typeof ResetPasswordFormSchema>;

export const ResetPasswordBackendSchema = z.object({
  password: z.string().min(8),
  email: z.string().email(),
  token: z.string(),
});
export type ResetPasswordBackendT = z.infer<typeof ResetPasswordBackendSchema>;