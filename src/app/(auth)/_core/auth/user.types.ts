import { z } from "zod"

// ESQUEMA -> QUE ES LO QUE YO ESPERO RECIBIR DEL USUARIO.
export const UserSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, {
        message: "El nombre de usuario debe tener al menos tres caracteres."
    }),
    email: z.string().email({
        message: "Dirección de correo electrónico inválida."
    }),
    password: z.string().min(8, {
        message: "La contraseña debe ser mayor a 8."
    }),
    role: z.enum(["ADMIN", "USER", "GUEST"], {
        message: "Rol inválido."
    }
    )
})

// export const SignInSchema = UserSchema.pick({ email: true, password: true });
// export type SignInT = z.infer<typeof SignInSchema>;

// ESQUEMA Y TIPO PARA REGISTRO
export const RegisterSchema = UserSchema.pick({
    email: true,
    password: true,
    name: true,
})
    .extend({
        confirmPassword: z.string().min(8, {
            message: "La contraseña debe ser mayor a 8.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        //En caso de ser falso
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"], // ruta de error
    });

export type RegisterT = z.infer<typeof RegisterSchema>;


// ESQUEMA Y TIPO PARA LOGIN
export const LoginSchema = UserSchema.pick({
    email: true,
    password: true
})

export type LoginT = z.infer<typeof LoginSchema>;