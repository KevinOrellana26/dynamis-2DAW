"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type BackButtonProps = {
  path: string;
  className?: string;
};

export default function BackButton(params: BackButtonProps) {
  const { path, className } = params;
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleBackButton = () => {
    setIsPending(true);
    router.push(path);
  };

  return (
    <Button
      variant={"dynamis"}
      className={className}
      onClick={handleBackButton}
      isPending={isPending}
    >
      {isPending ? "Volviendo" : "Volver"}
    </Button>
  );
}
