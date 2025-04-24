"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { loginUser } from "../_core/user/user.action";

//Validación (Esquema)
export const AuthFormSchema = z.object({
  email: z.string().email({
    message: "Dirección de correo electrónico inválida.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe ser mayor a 8.",
  }),
});

export const LoginFormsSchema = AuthFormSchema;
export type LoginFormT = z.infer<typeof LoginFormsSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  //defino la forma
  const form = useForm<LoginFormT>({
    resolver: zodResolver(LoginFormsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: LoginFormT) => {
    try {
      setIsLoading(true);
      const result = await loginUser(values);

      if (result?.error) {
        toast.error("Error al inciar sesión", {
          description: result.error,
        });
      } else {
        toast.success("Bienvenido", {
          description: "Has iniciado sesión correctamente.",
        });
        //redirigir al /dashboard después.
      }
    } catch (error) {
      console.error(error);
      toast.error("Error en registro", {
        description: "Ocurrió un error al iniciar sesión.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    //wrapper
    //{...form} -> recibe todas las configuraciones definidas en useForm()
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        {/* campo de email */}
        <FormField
          control={form.control} //conexión con React Hook Form
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              {/* envuelve el input para conectarlo con la validación control={form.control} */}
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="tuemail@gmail.com"
                />
              </FormControl>
              {/* mensajes de error si los hay */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo de contraseña */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Botón de envío */}
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && <RiLoader2Fill className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
      </form>
    </Form>
  );
}
