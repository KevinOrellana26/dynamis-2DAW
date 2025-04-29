import { auth } from "./(auth)/_core/auth/auth.lib";

export default auth((req) => {

})

export const config = {
/*
 * Match all request paths except for:
 * - api/trpc routes
 * - static files (._next, images, etc.)
 * - login page
 * - public routes
*/
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}