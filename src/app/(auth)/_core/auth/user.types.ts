import { z } from "zod"

// export type UserRolT = 'ADMIN' | 'USER' | 'INVITADO'

// export type UserT = {
//     id?: string
//     nombre: string
//     email: string
//     password?: string
//     rol: UserRolT
// }

//tipo - esquema es lo mismo, se tiene que validar tanto en el
// back como en el front.

export const UserSchema = z.object({
    id: z.string().optional(),
    nombre: z.string().min(3, {
        message: "El nombre de usuario debe tener al menos tres caracteres."
    }),
    email: z.string().email({
        message: "Dirección de correo electrónico inválida."
    }),
    password: z.string().min(8, {
        message: "La contraseña debe ser mayor a 8."
    }).optional(),
    rol: z.enum(["ADMIN", "USER", "INVITADO"], {
        message: "Rol inválido."
    }
    )
})