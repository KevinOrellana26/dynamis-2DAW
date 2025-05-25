import { prisma } from "@/lib/prisma";
import { AddUserFormT, DeleteUserT, EditUserFormT } from "./users.definitions";
import bcrypt from "bcryptjs";
import { sendEmailVerificationAction } from "@/app/(auth)/verify-email/_core/verify-email.actions";

export const getTotalUsers = async () => {
  try {
    const users = await prisma.user.count();
    return users;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado usuarios.";
    throw new Error(message);
  }
};

export const getUsersList = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        createdAt: true,
        role: true,
        isEmailVerified: true,
      },
    });

    if (!users || users.length === 0) {
      return [];
    }
    return users;
  } catch (error) {
    console.error("Error", error);
    const message = "No se han encontrado usuarios.";
    throw new Error(message);
  }
};

export const addUser = async (params: AddUserFormT) => {
  try {
    const { name, role, confirmPassword, password, email } = params;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      const message = `El usuario con email ${email} ya existe`;
      throw new Error(message);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const defaultAvatarPath = "/profile/defaultAvatar.png";

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
        role: role,
        avatar: defaultAvatarPath,
      },
    });

    await sendEmailVerificationAction({
      userId: user.id,
      email: user.email,
      username: user.name,
    });

    console.log({ user });

    const message = `Cuenta creada exitosamente. Se ha enviado un correo a la cuenta ${email}`;
    return message;
  } catch (error) {
    console.error("Error", error);
    const message = "Error al crear la cuenta";
    throw new Error(message);
  }
};

export const editUser = async (params: EditUserFormT) => {
  try {
    const { name, role, id } = params;
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        name: name,
        role: role,
      },
    });

    if (!user) {
      const message = "No se ha podido actualizar el usuario.";
      throw new Error(message);
    }

    console.log("Editando ------------------------------------------------------------------------------------")
    console.log({ user });
    console.log("---------------------------------------------------------------------------------------------")

    const message = `Usuario ${user.name} actualizado correctamente`;
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "No se ha podido actualizar el usuario.";
    throw new Error(message);
  }
};

export const deleteUser = async (params: DeleteUserT) => {
  try {
    const { userId } = params;
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    if (!user) {
      const message = "No se ha podido eliminar el usuario.";
      return message;
    }
    
    console.log(
      "Eliminando ------------------------------------------------------------------------------------"
    );
    console.log({ user });
    console.log(
      "-----------------------------------------------------------------------------------------------"
    );

    const message = `Usuario ${user.name} eliminado correctamente`;
    return message;
  } catch (error) {
    console.error("Error: ", error);
    const message = "No se ha podido actualizar el usuario.";
    throw new Error(message);
  }
};
