import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgotPasswordLink from "@/components/auth/ForgotPasswordLink";

function RegisterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input type="name" id="name" placeholder="nombre" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <Input
            type="email"
            id="register-email"
            placeholder="correo@gmail.com"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="register-password">Contraseña</Label>
            <ForgotPasswordLink/>
          </div>
          <Input
            type="password"
            id="register-password"
            placeholder="password"
            required
          />
        </div>
        <Button type="submit" variant={"dynamis"} className="w-full">
          Registrarse
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
