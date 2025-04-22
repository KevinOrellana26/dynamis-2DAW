import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
        // error: "/login?error=1" //Página para errores
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // redirige al usuario al login page si no está logueado
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl))
            }
            return true;
        }
    },
    providers: [],
} satisfies NextAuthConfig;