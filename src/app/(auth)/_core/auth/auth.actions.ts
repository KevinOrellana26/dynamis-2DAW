import { sessionOptions, SessionData, defaultSession } from "@/app/(auth)/_core/auth/auth.lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"

//OBTIENE LA SESIÓN
export const getSession = async () => {
    //cookies de next/headers devuelve una promesa, getSession espera un objeto de tipo cookieStore
    //debemos usar await para resolver la promesa antes de pasarla a getIronSession()
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    //si no hay sesión activa, devuelvo la sesión por defecto
    if (!session.isLoggedIn) {
        return { ...defaultSession }
    }

    return session;
}

//LOGIN
export const login = async ({ email, name, role, userId }: SessionData) => {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    session.name = name;
    session.userId = userId;
    session.email = email;
    session.role = role;
    session.isLoggedIn = true;

    await session.save(); // Guarda la sesión en la cookie
    return session;
};

//LOGOUT
export const logout = async () => {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    session.destroy(); // Destruye la sesión
    return { ...defaultSession }
};