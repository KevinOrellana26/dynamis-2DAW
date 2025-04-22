import Link from "next/link";
import { cn } from "@/lib/components.lib";
import { buttonVariants } from "@/components/ui/button";

function ForgotPasswordLink() {
  return (
    <Link
      href={"/restore"}
      className={cn(buttonVariants({ variant: "link" }), "px-0")}
    >
      ¿Olvidaste tu contraseña?
    </Link>
  );
}

export default ForgotPasswordLink;
