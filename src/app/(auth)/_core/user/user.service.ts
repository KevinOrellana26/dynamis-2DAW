//getUser, createUser, deleteUser, updateUser

import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { UserSchema } from "../auth/user.types"
import { z } from "zod";
type UserT = z.infer<typeof UserSchema>;

async function getUser(email: string, password: string): Promise<UserT | null> {
    try {
        const user = await prisma.usuario.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                nombre: true,
                password: true,
                rol: true,
            },
        })

        if (!user) return null

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) return null

        return {
            id: user.id.toString(),
            email: user.email,
            nombre: user.nombre,
            rol: user.rol
        }
    } catch (error) {
        console.error("error interno en el servidor", error)
        return null
    }
}