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
import { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { RiLoader2Fill } from "react-icons/ri";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { RegisterSchema, RegisterT } from "../_core/auth/user.types";
import { registerUserAction } from "../_core/user/user.actions";

//Defino el esquema
// export const RegisterFormSchema = RegisterSchema;
// export type RegisterFormT = z.infer<typeof RegisterFormSchema>;

type RegisterFormProps = ComponentProps<"form"> & {
  onRegister?: () => void;
};

export default function RegisterForm({
  onRegister,
  ...props
}: RegisterFormProps) {
  //Inicialización del formulario, como sus valores por defecto.
  const form = useForm<RegisterT>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { isPending, execute } = useServerAction(registerUserAction, {
    //callbacks
    onSuccess: ({ data: message }) => {
      toast.success(message);
      form.reset();
      onRegister?.(); //solo se va a ejecutar si onRegister existe. Redirección después de un registro éxitoso.
    },
    onError: ({ err }) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: RegisterT) => {
    execute(values); // <- envía los datos al servidor (server action: registerUseAction)
  };

  return (
    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
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
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar contraseña</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* {isError && <p>{error.message}</p>} */}
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full cursor-pointer"
          disabled={isPending}
        >
          {isPending && <RiLoader2Fill className="mr-2 h-4 2-4 animate-spin" />}
          {isPending ? "Registrando" : "Registrarse"}
        </Button>
      </form>
    </Form>
  );
}
