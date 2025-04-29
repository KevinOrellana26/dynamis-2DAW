
import { Metadata } from "next";
// import { middleware } from "@/app/(auth)/_core/auth/auth.lib";
import { redirect } from "next/navigation";
// import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  // const session = await auth();

  // if (!session?.user) {
    //redirige al login si no hay sesión
  //   redirect("/login");
  // }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl">
        {/* Dashboard | Hello, {session?.user.name} con email {session?.user.email}  */}
        Hola
      </h1>
    </div>
  );
}
