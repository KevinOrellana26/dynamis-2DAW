//Funciones principales para manejar la autenticación de usuarios.
"use server";

import { prisma } from "@/lib/prisma";
import { signIn } from "../auth/auth.lib";
// import { RegisterFormT } from "@/app/(auth)/_components/RegisterForm"
// import { LoginFormT } from "@/app/(auth)/_components/LoginForm";
import { IS_DEV } from "@/config/env.config";
import bcrypt from 'bcryptjs';
import { LoginT, RegisterT } from "../auth/user.types";

//Registrar nuevos usuarios
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

        // Iniciar sesión automáticamente después del registro
        await signIn("credentials", {
            email: values.email,
            password: values.password, //muestro la contraseña si hashear en la terminal
            name: values.name,
            redirect: false
        });

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

        //Iniciar sesión
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false
        });

        const message = "Se ha iniciado sesión correctamente"

        return message
    } catch (error) {
        IS_DEV && console.log(error)
        const message = "Error al iniciar sesión"
        throw new Error(message)
    }
}