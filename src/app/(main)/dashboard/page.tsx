import { Metadata } from "next";
import { auth } from "@/app/(auth)/_core/auth/auth.lib";

export const metadata: Metadata = {
  title: "Dashboard",
};

async function Page() {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    return null;
  }

  const userInfo = {
    name: user?.name,
    email: user?.email,
  };

  console.log({ userInfo });
  return <div>Dasboard | Hello, {JSON.stringify(userInfo, null, 2)}</div>;
}

export default Page;
