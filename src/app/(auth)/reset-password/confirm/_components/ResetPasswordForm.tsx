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
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import {
  ResetPasswordFormSchema,
  ResetPasswordFormT,
} from "../_core/confirm.definitions";
import { resetPasswordAction } from "../confirm.actions";

type ResetPasswordFormPageT = {
  token: string;
  email: string;
};

export default function ResetPasswordFormPage(props: ResetPasswordFormPageT) {
  const router = useRouter();
  const { email, token } = props;

  const form = useForm<ResetPasswordFormT>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { isPending, execute } = useServerAction(resetPasswordAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.push("/login");
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: ResetPasswordFormT) => {
    execute({ password: values.password, email, token });
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nueva contraseña</FormLabel>
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
        <Button
          type="submit"
          variant={"dynamis"}
          className="w-full"
          isPending={isPending}
        >
          {isPending ? "Restableciendo" : "Cambiar contraseña"}
        </Button>
      </form>
    </Form>
  );
}
