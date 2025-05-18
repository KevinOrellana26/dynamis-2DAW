import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-8 md:p-14 w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl text-accent-blue">
            ¿Olvidaste tu contraseña?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
