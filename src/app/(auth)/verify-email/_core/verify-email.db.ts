import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  SendEmailVerificationT,
  VerifyEmailTokenT,
} from "./verify-email.definitions";
import { generateToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/email";

export async function verifyEmail({ token }: VerifyEmailTokenT) {
  try {
    if (!token) throw new Error("Datos incompletos.");

    //1. Buscar el token activo
    const dbToken = await prisma.token.findFirst({
      where: {
        expiresAt: { gt: new Date() },
      },
      include: {
        user: true,
      },
    });

    if (!dbToken) {
      const message = "Token no encontrado o expirado";
      throw new NotFoundError(message);
    }

    //2. Comparo los tokens
    const isMatch = await bcrypt.compare(token, dbToken.token);
    if (!isMatch) {
      const message = "Token inválido";
      throw new Error(message);
    }

    //3. Si existe el token, verifico el userId
    await prisma.user.update({
      where: {
        id: dbToken.userId,
      },
      data: {
        isEmailVerified: true,
      },
    });

    //4. Elimino el token
    await prisma.token.delete({ where: { id: dbToken.id } });

    const message = "Correo verificado correctamente.";
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "Token no encontrado o expirado";
    throw new NotFoundError(message);
  }
}

export async function sendEmailVerification(props: SendEmailVerificationT) {
  const { email, userId, username } = props;
  const { rawToken, hashedToken } = await generateToken();

  await prisma.token.create({
    data: {
      userId,
      token: hashedToken,
      type: "emailVerification",
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60), //1hora
    },
  });

  await sendVerificationEmail({
    to: email,
    token: rawToken,
    username: username,
  });
}
