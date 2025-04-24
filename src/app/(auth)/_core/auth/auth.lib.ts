import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from 'bcryptjs';
import { signInSchema } from './user.types';

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
                    const { email, password } = await signInSchema.parseAsync(credentials)

                    const user = await prisma.user.findUnique({
                        where: { email }
                    })

                    if (!user) return null;

                    const isPasswordValid = await bcrypt.compare(password, user.password)
                    if (!isPasswordValid) return null;

                    return user
                } catch (error) {
                    console.error("Error en autorización: ", error)
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        error: "/login"
    },
    callbacks: {
        authorized: async ({ auth }) => {
            //logged in user are authenticated, otherwise redirect to login page
            return !!auth;
        }
    },
    session: {
        strategy: "jwt"
    },
    trustHost: true,
})