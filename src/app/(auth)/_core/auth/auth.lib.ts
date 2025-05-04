// Vamos a decidir que información del usuario queremos almacenar en la cookie de sesión.

import { SessionOptions } from "iron-session"
import { IS_PROD } from "@/config/env.config";

export type SessionData = {
    userId?: string
    name?: string
    email?: string
    avatar?: string
    role: "USER" | "ADMIN" | "GUEST"
    isLoggedIn: boolean
}

export const defaultSession: SessionData= {
    isLoggedIn: false,
    role: "GUEST"
}

export const sessionOptions: SessionOptions = {
    password: process.env.IRON_SESSION_SECRET_KEY!,
    cookieName: "dynamis-user-session",
    cookieOptions: {
        httpOnly: true,
        secure: IS_PROD,
        path: "/"
    }

}