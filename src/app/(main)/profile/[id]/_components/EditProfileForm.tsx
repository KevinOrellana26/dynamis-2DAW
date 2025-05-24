"use client";
import { useForm } from "react-hook-form";
import { EditProfileUserT } from "./EditProfileDialog";
import { EditProfileSchema, EditProfileT } from "../_core/profile.definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { updateProfileAction } from "../profile.actions";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type EditProfileFormProps = {
  user: EditProfileUserT;
  onSuccess?: () => void;
};

export default function EditProfileForm({
  user,
  onSuccess,
}: EditProfileFormProps) {
  const form = useForm<EditProfileT>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      // userId: "",
      name: user.name,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { isPending, execute } = useServerAction(updateProfileAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      form.reset();
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: EditProfileT) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} placeholder={user.name} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña actual</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nueva Contraseña</FormLabel>
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
              <FormLabel>Confirmar nueva contraseña</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Guardando" : "Guardar cambios"}
        </Button>
      </form>
    </Form>
  );
}
