import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./app/(auth)/_core/auth/auth.actions";

//1. Esoecificar las rutas publicas y privadas
const publicRoutes = ["/", "/login"];
//! TODO: PROTEGER LAS RUTAS HIJAS (DE EXERCISE)
const protectedRoutes = ["/dashboard", "/progress", "/routine", "/exercises"];

export default async function middleware(req: NextRequest) {
  //2. Revisar si la ruta está protegida
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  console.log("---------------------------------------------");
  console.log("Middleware ejecutándose para la ruta:", path);
  console.log("Es ruta protegida:", isProtectedRoute);
  console.log("Es ruta pública:", isPublicRoute);
  console.log("---------------------------------------------");

  //3. Revisar si la cookie de sesión es válida
  const session = await getSession();
  // console.log("Datos de la sesion:", session);

  //4. Redirigir a /login si la ruta es protegida y no hay sesión activa
  // -> si no hay session
  // -> la session no está marcada como activa
  // -> no hay un userId en la session
  if (isProtectedRoute && (!session || !session.isLoggedIn)) {
    console.log("redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  //5. Redirigir a /dashboard si la ruta es pública y el usuario está autenticado
  if (isPublicRoute && session?.isLoggedIn) {
    console.log("redirigiendo a /dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  //6. Renderizar ruta
  console.log("Acceso permitido a la ruta");
  return NextResponse.next();
}

//Routes middleware should *not* run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
// export const config = {
//   matcher: ["/dashboard", "/progress", "/routine", "/exercise", "/login", "/"],
// };
