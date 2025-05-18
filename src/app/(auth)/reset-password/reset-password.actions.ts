"use server";

import { createServerAction } from "zsa";
import { sendEmailResetPassword } from "./_core/reset-password.db";
import { ForgotPasswordSchema } from "./_core/reset-password.definitions";

export const sendEmailResetPasswordAction = createServerAction()
  .input(ForgotPasswordSchema)
  .handler(async ({ input }) => {
    const response = await sendEmailResetPassword(input);
    return response;
  });

