import { z } from "zod";

export const SendEmailVerificationSchema = z.object({
  userId: z.string(),
  email: z.string().email().trim(),
  username: z.string().trim(),
});
export type SendEmailVerificationT = z.infer<
  typeof SendEmailVerificationSchema
>;

export const VerifyEmailTokenSchema = z.object({
  token: z.string().min(1, "El token es requerido"),
});
export type VerifyEmailTokenT = z.infer<typeof VerifyEmailTokenSchema>;
