import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function Page() {
  // const session = await auth();

  // if (!session?.user) {
    //redirige al login si no hay sesión
  //   redirect("/login");
  // }

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <h1 className="text-4xl">Admin Dashboard | Hello</h1>
    </div>
  );
}
