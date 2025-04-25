import Login from "@/app/(auth)/_components/AuthTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <Login />
    </div>
  );
}
