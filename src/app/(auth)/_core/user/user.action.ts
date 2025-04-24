//getUser, createUser, deleteUser, updateUser
"use server";

import { prisma } from "@/lib/prisma";
import { signIn } from "../auth/auth.lib";
import { RegisterFormT } from "@/app/(auth)/_components/RegisterForm"
import { LoginFormT } from "@/app/(auth)/_components/LoginForm";
import bcrypt from 'bcryptjs';

export async function registerUser(values: RegisterFormT) {
    try {
        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email: values.email },
        });

        if (existingUser) {
            return { error: "El email ya está registrado" };
        }

        //hashear la contraseña
        const hashedPassword: string = await bcrypt.hash(values.password, 10)

        // Crear el nuevo usuario
        const user = await prisma.user.create({
            data: {
                email: values.email,
                name: values.username,
                password: hashedPassword,
                rol: "USER"
            },
        });

        console.log(user)

        // Iniciar sesión automáticamente después del registro
        await signIn("credentials", {
            email: values.email,
            password: values.password, //muestro la contraseña si hashear en la terminal
            username: values.username,
            redirect: false,
        });

        return { success: "Cuenta creada exitosamente" };
    } catch (error) {
        console.error("Error en registro:", error);
        return { error: "Error al crear la cuenta" };
    }
}

export async function loginUser(values: LoginFormT) {
    try {
        // Buscar el usuario en la base de datos.
        const user = await prisma.user.findUnique({
            where: { email: values.email },
        });

        if (!user) {
            return { error: "Credenciales inválidas" };
        }

        //comprobar la contraseña que introdujo el usuario con la contraseña hasheada en la base de datos.
        const passwordHash = await bcrypt.compare(values.password, user.password)
        if (!passwordHash) return { error: "Credenciales inválidas." }

        //Iniciar sesión automáticamente después del registro
        const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (result?.error) return { error: result.error }
        
        return { success: "Inicio de sesión exitoso" };
    } catch (error) {
        console.error("Error en registro:", error);
        return { error: "Error al crear la cuenta" };
    }
}