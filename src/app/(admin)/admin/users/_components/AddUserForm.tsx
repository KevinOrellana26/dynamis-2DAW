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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { AddUserFormSchema, AddUserFormT } from "../_core/users.definitions";
import { addUserAction } from "../users.actions";

type AddUserFormProps = {
  onCloseDialog?: () => void;
};

export default function AddUserForm({ onCloseDialog }: AddUserFormProps) {
  const form = useForm<Omit<AddUserFormT, "id">>({
    resolver: zodResolver(AddUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      role: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  const { isPending, execute } = useServerAction(addUserAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      onCloseDialog?.();
    },
    onError: ({ err }) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: AddUserFormT) => {
    execute(values);
  };
  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Kevin, Andres, Carlos..." />
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
                <Input {...field} placeholder="correo@gmail.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN" className="cursor-pointer">
                      Administrador
                    </SelectItem>
                    <SelectItem value="USER" className="cursor-pointer">
                      Usuario
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                <Input {...field} type="password" placeholder="********" />
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
                <Input {...field} type="password" placeholder="********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          isPending={isPending}
        >
          {isPending ? "Añadiendo usuario" : "Añadir usuario"}
        </Button>
      </form>
    </Form>
  );
}
