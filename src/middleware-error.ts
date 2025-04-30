// import { auth } from '@/app/(auth)/_core/auth/auth.lib'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export default async function middleware(request: NextRequest) {
//     const session = await auth() // Llamamos directamente a auth()
//     const path = request.nextUrl.pathname
//     const protectedRoutes = ["/dashboard", "/exercise", "/progress", "/routine"]

//     // 1. Rutas protegidas
//     if (protectedRoutes.some(route => path.startsWith(route))) {
//         if (!session?.user) {
//             return NextResponse.redirect(new URL("/login", request.url))
//         }
//     }

//     // 2. Validación de roles
//     if (path.startsWith("/admin-dashboard")) {
//         if (session?.user.role !== "ADMIN") {
//             return NextResponse.redirect(new URL("/no-access", request.url))
//         }
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register).*)"],
//     runtime: "nodejs"
// }