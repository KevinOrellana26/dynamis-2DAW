//Funciones principales para manejar la autenticación de usuarios.
"use server";

import { prisma } from "@/lib/prisma";
import { signIn } from "../auth/auth.lib";
import { RegisterFormT } from "@/app/(auth)/_components/RegisterForm"
import { LoginFormT } from "@/app/(auth)/_components/LoginForm";
import bcrypt from 'bcryptjs';

//Registrar nuevos usuarios
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
        const hashedPassword = await bcrypt.hash(values.password, 10)

        // Creación del usuario
        const user = await prisma.user.create({
            data: {
                email: values.email,
                name: values.username,
                password: hashedPassword,
                rol: "USER" //por defecto será usuario
            },
        });

        // Iniciar sesión automáticamente después del registro
        await signIn("credentials", {
            email: values.email,
            password: values.password, //muestro la contraseña si hashear en la terminal
            username: values.username,
            redirect: true,
            redirectTo: "/dashboard"
        });

        //no se ejecutará si redirect: true funciona
        return { success: "Cuenta creada exitosamente" };
    } catch (error) {
        console.error("Error en registro:", error);
        return { error: "Error al crear la cuenta" };
    }
}

export async function loginUser(values: LoginFormT) {
    try {
        //1. Buscar el usuario.
        // const user = await prisma.user.findUnique({
        //     where: { email: values.email },
        // });

        // if (!user) {
        //     return { error: "Credenciales inválidas" };
        // }

        //2. Validar contraseña introducida con contraseña en BD
        // const passwordHash = await bcrypt.compare(values.password, user.password)
        // if (!passwordHash) return { error: "Credenciales inválidas." }

        //Iniciar sesión
        const user = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
            redirectTo: "/dashboard"
        });

        if (user?.error) return { error: user.error }

        console.log(user)
        return { success: "Inicio de sesión exitoso" };
    } catch (error) {
        console.error("Error en registro:", error);
        return { error: "Error al crear la cuenta" };
    }
}

//pasar la contraseña hasheada
// export async function getUser(email: string, password: string) {
//     const user = await prisma.user.findUnique({
//         where: { email }
//     })

//     if (!user) return null
//     const passwordMatch = await bcrypt.compare(password, user.password)

//     if (!passwordMatch) return null
//     console.log(user)
//     return user
// }
