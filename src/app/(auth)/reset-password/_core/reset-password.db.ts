// export async function resetPassword

import { prisma } from "@/lib/prisma";
import { ForgotPasswordT } from "./reset-password.definitions";
import { NotFoundError } from "@/app/_shared/errors";
import { generateToken } from "@/lib/token";
import { sendPasswordResetEmail } from "@/lib/email";

export const sendEmailResetPassword = async ({ email }: ForgotPasswordT) => {
  try {
    const normalizedEmail = email.toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      const message = "No se encontró ningún usuario con ese correo.";
      throw new NotFoundError(message);
    }

    const { rawToken, hashedToken } = await generateToken();
    await prisma.token.create({
      data: {
        userId: user.id,
        token: hashedToken,
        type: "passwordReset",
        expiresAt: new Date(Date.now() + 1000 * 60 * 60), //1 hora
      },
    });

    await sendPasswordResetEmail({
      to: user.email,
      token: rawToken,
    });

    const message =
      "Hemos enviado un correo con instrucciones para reestablecer tu contraseña.";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha encontrado ningún usuario con ese correo.";
    throw new Error(message);
  }
};
