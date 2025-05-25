"use client";
import { useForm } from "react-hook-form";
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
import {
  EditProfileUserSchema,
  EditProfileUserT,
} from "../_core/profile.definitions";

type EditProfileFormProps = {
  user: EditProfileUserT;
  onCloseDialog?: () => void;
};

export default function EditProfileForm({
  user,
  onCloseDialog,
}: EditProfileFormProps) {
  const form = useForm<EditProfileUserT>({
    resolver: zodResolver(EditProfileUserSchema),
    defaultValues: {
      name: user.name,
    },
  });

  const { isPending, execute } = useServerAction(updateProfileAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      form.reset();
      onCloseDialog?.();
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: EditProfileUserT) => {
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
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          isPending={isPending}
        >
          {isPending ? "Guardando" : "Guardar cambios"}
        </Button>
      </form>
    </Form>
  );
}
