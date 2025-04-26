import { AuthenticationError } from '@/app/_shared/errors';
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcryptjs';
import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from './user.types';
import { JWT } from "next-auth/jwt"

//Extender los tipos  para añadir propiedades que necesite añadir a la sesión.
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


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
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
        jwt({ token, user }) {
            if (user) {
                token.id = user.id as string; //Agrego el ID del usuario al token
                token.role = user.role; //Agrego el rol del usuario al token
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id as string; //Asigno el ID del usuario del token a la sesión
            session.user.role = token.role; //Asigno el rol del token a la sesión
            return session
        },
        authorized: async ({ auth }) => {
            return !!auth; //true si está autenticado, false si no
        },
    },
    session: {
        strategy: "jwt"
    },
    trustHost: true,
})