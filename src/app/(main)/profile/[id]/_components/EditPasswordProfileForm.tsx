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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import {
  UpdatePasswordProfileUserSchema,
  UpdatePasswordProfileUserT,
} from "../_core/profile.definitions";
import { updatePassworProfiledAction } from "../profile.actions";

type EditPasswordProfileFormProps = {
  // user: UpdatePasswordProfileUserT;
  onCloseDialog?: () => void;
};

export default function EditPasswordProfileForm({
  onCloseDialog,
}: EditPasswordProfileFormProps) {
  const form = useForm<UpdatePasswordProfileUserT>({
    resolver: zodResolver(UpdatePasswordProfileUserSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { isPending, execute } = useServerAction(updatePassworProfiledAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      form.reset();
      onCloseDialog?.();
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: UpdatePasswordProfileUserT) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña actual</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="********" />
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
              <FormLabel>Confirmar nueva contraseña</FormLabel>
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
          {isPending ? "Cambiando contraseña" : "Cambiar contraseña"}
        </Button>
      </form>
    </Form>
  );
}
