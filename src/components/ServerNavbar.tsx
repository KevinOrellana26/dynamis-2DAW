import AdminNavbar from "@/app/(admin)/_components/AdminNavbar";
import UserNavbar from "@/app/(main)/_components/UserNavbar";
import GuestNavbar from "@/components/GuestNavbar";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";

export default async function ServerNavbar() {
  const session = await getSession(); // Obtén la sesión en el servidor
  const role = session.role || "GUEST"; // Determina el rol del usuario

  // Renderiza el navbar correspondiente según el rol
  if (role === "ADMIN") {
    return <AdminNavbar isLoggedIn={session.isLoggedIn} />;
  } else if (role === "USER") {
    return <UserNavbar isLoggedIn={session.isLoggedIn} />;
  } else {
    return <GuestNavbar isLoggedIn={session.isLoggedIn} />;
  }
}
