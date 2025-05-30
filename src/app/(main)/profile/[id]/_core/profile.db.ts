"use server";
import { deleteSession } from "@/app/(auth)/_core/auth/auth.actions";
import { NotFoundError } from "@/app/_shared/errors";
import { prisma } from "@/lib/prisma";
import {
  EditProfileUserT,
  UpdatePasswordProfileUserT,
} from "./profile.definitions";
import bcrypt from "bcryptjs";

type UserProfileProps = {
  userId: string;
};

export async function getUserProfile(props: UserProfileProps) {
  try {
    const { userId } = props;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        avatar: true,
        role: true,
        isEmailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      const message = "Usuario no encontrado";
      throw new NotFoundError(message);
    }
    return user;
  } catch (error) {
    console.log("Error: ", error);
    const message = "Usuario no encontrado";
    throw new NotFoundError(message);
  }
}

export async function updateProfile(
  props: EditProfileUserT & { userId: string }
) {
  try {
    console.log("data", props);
    const { userId, name } = props;

    await prisma.user.update({
      where: { id: userId },
      data: {
        name: name,
      },
    });

    const message = "Perfil actualizado correctamente.";
    return message;
  } catch (error) {
    console.error("Error:", error);
    const message = "No se pudo actualizar el perfil.";
    throw new Error(message);
  }
}

export async function updatePasswordProfile(
  props: UpdatePasswordProfileUserT & { userId: string }
) {
  try {
    const { userId, currentPassword, newPassword } = props;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      const message = "Usuario no encontrado";
      throw new NotFoundError(message);
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      const message = "Contraseña actual incorrecta.";
      throw new Error(message);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
    const message = "Contraseña actualizada correctamente.";
    return message;
  } catch (error) {
    console.error("Error:", error);
    const message = "No se pudo actualizar la contraseña.";
    throw new Error(message);
  }
}

export async function deleteProfile({ userId }: UserProfileProps) {
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    await deleteSession();
    const message = "Usuario eliminado correctamente.";
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "No se pudo eliminar el usuario";
    throw new Error(message);
  }
}

export async function updateAvatarProfile({
  userId,
  avatar,
}: {
  userId: string;
  avatar: string;
}) {
  try {
    const updateAvatar = await prisma.user.update({
      where: { id: userId },
      data: { avatar: avatar },
    });

    if (!updateAvatar) {
      const message = "No se pudo actualizar el avatar.";
      throw new Error(message);
    }

    const message = "Avatar actualizado correctamente.";
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "No se pudo actualizar el avatar.";
    throw new Error(message);
  }
}
