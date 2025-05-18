import { createServerAction } from "zsa";
import { resetPassword } from "./_core/confirm.db";
import { ResetPasswordBackendSchema } from "./_core/confirm.definitions";

export const resetPasswordAction = createServerAction()
  .input(ResetPasswordBackendSchema)
  .handler(async ({ input }) => {
    const response = await resetPassword(input);
    return response;
  });
