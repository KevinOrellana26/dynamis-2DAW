//Funciones principales para manejar la autenticación de usuarios.
"use server";

import { IS_DEV } from "@/config/env.config";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "../auth/auth.lib";
import { LoginT, RegisterT } from "../auth/user.types";
import { login } from "../auth/auth.actions";

//Registrar nuevos usuarios - NO HACE FALTA EN EL REGISTRER PONER LA COOKIE
export async function registerUser(values: RegisterT) {
    try {
        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email: values.email },
        });

        if (existingUser) {
            throw new Error("El usuario ya existe")
        }

        //hashear la contraseña
        const hashedPassword = await bcrypt.hash(values.password, 10)

        // Creación del usuario
        const user = await prisma.user.create({
            data: {
                email: values.email,
                name: values.name,
                password: hashedPassword,
                role: "USER" //por defecto será usuario normal
            },
        });

        console.log({ user })

        const message = "Cuenta creada exitosamente";
        return message;
    } catch (error) {
        IS_DEV && console.log(error)
        const message = "Error al crear la cuenta"
        throw new Error(message)
    }
}

export async function loginUser(values: LoginT) {
    try {
        console.log({ values })

        // Verificar si el usuario ya existe
        const user = await prisma.user.findUnique({
            where: { email: values.email },
        });

        if (!user || !(await bcrypt.compare(values.password, user.password))) {
            throw new Error("Credenciales inválidas.");
        }

        //creación de la cookie
        await login({ userId: user.id, email: user.email, name: user.name as string, role: user.role })

        const message = "Se ha iniciado sesión correctamente"

        return message
    } catch (error) {
        IS_DEV && console.log(error)
        const message = "Error al iniciar sesión"
        throw new Error(message)
    }
}