import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgotPasswordLink from "@/components/auth/ForgotPasswordLink";

function LoginForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            type="email"
            id="login-email"
            placeholder="correo@gmail.com"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="login-password">Contraseña</Label>
            <ForgotPasswordLink />
          </div>
          <Input
            type="password"
            id="login-password"
            placeholder="password"
            required
          />
        </div>
        <Button type="submit" variant={"dynamis"} className="w-full">
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
