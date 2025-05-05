"use client";
import { logoutUserAction } from "@/app/(auth)/_core/user/user.actions";
import { useRouter } from "next/navigation";
import { useServerAction } from "zsa-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  // zsa
  const { execute, isPending } = useServerAction(logoutUserAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.push("/");
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleLogoutButton = async () => {
    execute();
  };

  return (
    <Button
      variant={"dynamis"}
      className="cursor-pointer"
      onClick={handleLogoutButton}
      isPending={isPending}
    >
      {isPending ? "Cerrando sesión..." : "Cerrar sesión"}
    </Button>
  );
}
