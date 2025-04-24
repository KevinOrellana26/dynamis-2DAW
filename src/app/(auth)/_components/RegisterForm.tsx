"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthFormSchema } from "./LoginForm";
import { useState } from "react";
import { toast } from "sonner";
import { RiLoader2Fill } from "react-icons/ri";
import { registerUser } from "../_core/user/user.action";

//Defino el esquema
export const RegisterFormSchema = AuthFormSchema.extend({
  username: z.string().min(3, {
    message: "El nombre de usuario debe tener al menos tres caracteres.",
  }),
});

export type RegisterFormT = z.infer<typeof RegisterFormSchema>;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  //defino la forma
  const form = useForm<RegisterFormT>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: RegisterFormT) => {
    try {
      setIsLoading(true);

      const result = await registerUser(values);

      if (result?.error) {
        toast.error("Error en registro", {
          description: result.error,
        });
      } else {
        toast.success("Registro exitoso", {
          description: "Tu cuenta ha sido creada satisfactoriamente",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error en registro", {
        description: "Ocurrió un error al crear tu cuenta",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Kevin, Jose, Roger..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="tuemail@gmail.com" />
              </FormControl>
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
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && <RiLoader2Fill className="mr-2 h-4 2-4 animate-spin" />}
          Registrarse
        </Button>
      </form>
    </Form>
  );
}
