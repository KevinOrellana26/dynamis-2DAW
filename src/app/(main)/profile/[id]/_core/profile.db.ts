"use server";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "@/app/_shared/errors";
import { deleteSession } from "@/app/(auth)/_core/auth/auth.actions";
import { revalidatePath } from "next/cache";
import { EditProfileT } from "./profile.definitions";

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

export async function updateProfile(props: EditProfileT & { userId: string }) {
  try {
    console.log("data", props);
  } catch (error) {}
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
    return message;
  }
}
