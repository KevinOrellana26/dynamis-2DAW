import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import { SearchParams } from "nuqs";
import { handleAsync } from "@/app/_shared/errors";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { verifyEmailTokenAction } from "./_core/verify-email.actions";
import { tokenSearchParamsCache } from "./_core/verify-email.search-params";

type VerifyEmailPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function VerifyEmailPage({
  ...props
}: VerifyEmailPageProps) {
  const searchParams = await props.searchParams;
  const { token } = tokenSearchParamsCache.parse(searchParams);

  const [message, error] = await handleAsync(() =>
    verifyEmailTokenAction({ token })
  );

  if (error) {
    return (
      <ErrorMessage
        message={error.message || "Error al verificar el correo."}
        path="/"
      />
    );
  }

  return (
    <div className="text-center mt-20 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">{message}</h1>
      <p>Puedes cerrar esta ventana o iniciar sesión.</p>
      <Link href={"/login"}>
        <Button variant={"dynamis"}>Iniciar sesión</Button>
      </Link>
    </div>
  );
}
