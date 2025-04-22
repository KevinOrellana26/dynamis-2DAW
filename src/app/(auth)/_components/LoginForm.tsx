"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgotPasswordLink from "@/app/(auth)/_components/ForgotPasswordLink";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

//Validación (Esquema)
export const AuthFormSchema = z.object({
  email: z.string().email({
    message: "Dirección de correo electrónico inválida.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe ser mayor a 8.",
  }),
});

const LoginFormsSchema = AuthFormSchema;

type LoginFormT = z.infer<typeof LoginFormsSchema>;

export default function LoginForm() {
  //defino la forma
  const form = useForm<LoginFormT>({
    resolver: zodResolver(LoginFormsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //defino como se maneja el envío del formulario
  function onSubmit(values: LoginFormT) {
    console.log(values);
  }

  return (
    //wrapper
    //{...form} -> recibe todas las configuraciones definidas en useForm()
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* campo del formulario */}
        <FormField
          control={form.control} //conexión con React Hook Form
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              {/* envuelve el input para conectarlo con la validación control={form.control} */}
              <FormControl>
                <Input {...field} placeholder="tuemail@gmail.com" />
              </FormControl>
              {/* mensajes de error si los hay */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"dynamis"} className="w-full">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
}
