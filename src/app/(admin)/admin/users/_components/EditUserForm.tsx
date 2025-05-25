"use client";
import { useForm } from "react-hook-form";
import { EditUserFormSchema, EditUserFormT } from "../_core/users.definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { editUserAction } from "../users.actions";

type EditUserFormProps = {
  user: EditUserFormT;
  onCloseDialog?: () => void;
};

export default function EditUserForm({
  user,
  onCloseDialog,
}: EditUserFormProps) {
  const { id, name, role } = user;
  const form = useForm<EditUserFormT>({
    resolver: zodResolver(EditUserFormSchema),
    defaultValues: {
      id: id,
      name: name,
      role: role,
    },
  });

  const { isPending, execute } = useServerAction(editUserAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      onCloseDialog?.();
    },
    onError: ({ err }) => {
      console.log(err), toast.error(err.message);
    },
  });

  const handleSubmit = async (values: EditUserFormT) => {
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
                <Input {...field} placeholder={name} />
              </FormControl>
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
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN">Administrador</SelectItem>
                    <SelectItem value="USER">Usuario</SelectItem>
                  </SelectContent>
                </Select>
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
          {isPending ? "Editando usuario" : "Editar usuario"}
        </Button>
      </form>
    </Form>
  );
}
