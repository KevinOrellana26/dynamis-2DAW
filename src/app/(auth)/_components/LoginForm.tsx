"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RiLoader2Fill } from "react-icons/ri";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { LoginSchema, LoginT } from "../_core/auth/user.types";
import { loginUserAction } from "../_core/user/user.actions";

//Validación (Esquema)
// export const LoginFormSchema = LoginSchema;
// export type LoginFormT = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const router = useRouter();

  //defino la forma del formulario con su tipo correspondiente.
  const form = useForm<LoginT>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isPending, execute } = useServerAction(loginUserAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.push("/dashboard");
    },
    onError: ({ err }) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: LoginT) => {
    execute(values);
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
          className="w-full cursor-pointer"
          isPending={isPending}
        >
          {/* {isPending && <RiLoader2Fill className="mr-2 h-4 w-4 animate-spin" />} */}
          {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
      </form>
    </Form>
  );
}
