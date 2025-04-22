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
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

//Defino el esquema
const RegisterFormSchema = AuthFormSchema.extend({
  username: z.string().min(3, {
    message: "El nombre de usuario debe tener al menos tres caracteres.",
  }),
});
type RegisterFormT = z.infer<typeof RegisterFormSchema>;

export default function RegisterForm() {
  //defino la forma
  const form = useForm<RegisterFormT>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  //defino como se maneja el envío, aquí es donde se realizaría la consulta a la BD
  async function onSubmit(values: RegisterFormT) {
    console.log(values);
    try {
      const hashedPassword = await bcrypt.hash(values.password, 10)
      await prisma.usuario.create({
        data: {
          nombre: values.username,
          email: values.email,
          password: hashedPassword,
          rol: "USER"
        }
      })

      //redirigir al login tras el registro exitoso
      //mostrar toast
    }catch(error){
      console.error("Error en registro: ", error)
      //mostrar toast
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
        <Button type="submit" variant={"dynamis"} className="w-full">
          Registrarse
        </Button>
      </form>
    </Form>
  );
}
