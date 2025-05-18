import { z } from "zod";
import { UserSchema } from "../../_core/auth/user.types";

export const ForgotPasswordSchema = UserSchema.pick({
  email: true,
});
export type ForgotPasswordT = z.infer<typeof ForgotPasswordSchema>;
