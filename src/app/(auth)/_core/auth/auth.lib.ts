import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from 'bcryptjs';

interface CredentialsT {
    email: string,
    password: string
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
                //type assertion para asegurar los tipos
                const { email, password } = credentials as Partial<CredentialsT>

                if (!email || !password) return null

                const user = await prisma.user.findUnique({
                    where: { email }
                })

                if (!user) return null

                const passwordMatch = await bcrypt.compare(password, user.password)
                if (!passwordMatch) return null
                return user
                // if (user?.password === credentials?.password) {
                //     return user;
                // } else {
                //     return null;
                // }
            }
        })
    ],
    pages: {
        signIn: "/login"
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