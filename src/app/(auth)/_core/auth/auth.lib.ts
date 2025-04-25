import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from 'bcryptjs';
import { AuthenticationError } from '@/app/_shared/errors';
import { LoginSchema } from './user.types';

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
        signIn: "/login",
        signOut: "/",
        error: "/login"
    },
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth; //true si está autenticado, false si no
        },
    },
    session: {
        strategy: "jwt"
    },
    trustHost: true,
})