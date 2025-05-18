"use server";
import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { ResetPasswordBackendT } from "./confirm.definitions";

export const resetPassword = async (props: ResetPasswordBackendT) => {
  try {
    const { email, password, token } = props;
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      const message = "Usuario no encontrado";
      throw new NotFoundError(message);
    }

    const dbToken = await prisma.token.findFirst({
      where: {
        userId: user.id,
        type: "passwordReset",
        expiresAt: { gt: new Date() },
      },
    });

    if (!dbToken) {
      const message = "Token inválido o expirado";
      throw new NotFoundError(message);
    }

    console.log(token);
    const isValid = await bcrypt.compare(token, dbToken.token);
    if (!isValid) {
      const message = "Token inválido";
      throw new Error(message);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.token.delete({ where: { id: dbToken.id } });
    const message = "¡Contraseña actualizada correctamente!";
    return message;
  } catch (error) {
    console.log("Error", error);
    const message = "No se ha podido actualizar la contraseña.";
    throw new Error(message);
  }
};
