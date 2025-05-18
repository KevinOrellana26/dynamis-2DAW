import { SearchParams } from "nuqs";
import { tokenSearchParamsCache } from "../../verify-email/_core/verify-email.search-params";
import ResetPasswordFormPage from "./_components/ResetPasswordForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ConfirmResetPasswordPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ConfirmResetPasswordPage({
  ...props
}: ConfirmResetPasswordPageProps) {
  const searchParams = await props.searchParams;
  const { email, token } = tokenSearchParamsCache.parse(searchParams);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-8 md:p-14 w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl text-accent-blue">
            ¿Olvidaste tu contraseña?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResetPasswordFormPage token={token} email={email} />
        </CardContent>
      </Card>
    </div>
  );
}
