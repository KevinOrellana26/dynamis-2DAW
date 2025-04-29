import { AuthenticationError } from '@/app/_shared/errors';
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcryptjs';
import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from './user.types';
import type { NextAuthConfig } from 'next-auth';

// Flujo:
// 1. El usuario envía credenciales
// 2. authorize las valida contra la BD
// 3. Si son válidas, se crea un JWT con id y role
// 4. El callback sesision hace esos datos accesibles vía useSession
// 5. Si hay un middleware.ts usa la función auth para proteger rutas
// 6. El callback authorized determina si el usuario tiene acceso


//Extender los tipos  de NextAuth para incluir el id y el role tanto en la sesión como en token.
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"]
    }

    interface User {
        role: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
    }
}

//Exportamos objetos y funciones para la autenticación
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    // cookies: {
    //     sessionToken: {
    //         name: ""
    //     }
    // },
    providers: [
        Credentials({ //configuración de proveedores de autenticación
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await LoginSchema.parseAsync(credentials)

                    const user = await prisma.user.findUnique({
                        where: { email }
                    })

                    if (!user) return null;

                    const isPasswordValid = await bcrypt.compare(password, user.password)
                    if (!isPasswordValid) return null;

                    return user
                } catch (error) {
                    throw error instanceof Error ? new AuthenticationError(error.message) : error
                }

            }
        })
    ],
    pages: {
        signIn: "/login", //Página de inicio de sesión
        signOut: "/", //Página de redirección al cerrar sesión
        // error: "/login" //Opcional: página de error
    },
    callbacks: {
        jwt({ token, user }) { // -> Añado el id y rol al Token.
            if (user) {
                token.id = user.id as string;
                token.role = user.role;
            }
            return token
        },
        session({ session, token }) { // -> Añado el id y rol a la Sesión.
            session.user.id = token.id as string;
            session.user.role = token.role;
            return session
        },
        authorized: async ({ auth }) => { // -> Determina si el usuario tiene acceso.
            return !!auth;
        },
    },
    session: {
        strategy: "jwt"
    },
    trustHost: true,
} satisfies NextAuthConfig) 