import { z } from "zod"

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
    }),
    rol: z.enum(["ADMIN", "USER", "INVITADO"], {
        message: "Rol inválido."
    }
    )
})