"use server";
import { sessionOptions, SessionData } from "@/app/(auth)/_core/auth/auth.lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

//OBTIENE LA SESIÓN -> Descifra la cookie de sesión y acccede a la información.
export const getSession = async () => {
  //cookies de next/headers devuelve una promesa, getSession espera un objeto de tipo cookieStore
  //debemos usar await para resolver la promesa antes de pasarla a getIronSession()
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  console.log("Session data: ", session);
  return session;
};

// FUNCIÓN QUE SE EJECUTA AL HACER EL LOGIN
export const createSession = async ({
  email,
  name,
  role,
  userId,
  avatar,
}: Omit<SessionData, "isLoggedIn">) => {
  const session = await getSession();

  session.name = name;
  session.userId = userId;
  session.email = email;
  session.role = role;
  session.avatar = avatar;
  session.isLoggedIn = true;

  await session.save(); // Guarda la sesión en la cookie
  return session;
};

//FUNCIÓN QUE SE EJECUTA AL HACER EL LOGOUT
export const deleteSession = async () => {
  const session = await getSession();
  session.destroy(); // Destruye la sesión
  return session;
};
