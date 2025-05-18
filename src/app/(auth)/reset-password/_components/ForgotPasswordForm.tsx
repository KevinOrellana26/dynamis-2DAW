"use client";

import { useForm } from "react-hook-form";
import {
  ForgotPasswordSchema,
  ForgotPasswordT,
} from "../_core/reset-password.definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
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
import { toast } from "sonner";
import { sendEmailResetPasswordAction } from "../reset-password.actions";

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordT>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { execute, isPending } = useServerAction(sendEmailResetPasswordAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      form.reset();
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (values: ForgotPasswordT) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Introduce tu correo..." />
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
          {isPending ? "Enviando enlace" : "Enviar enlace"}
        </Button>
      </form>
    </Form>
  );
}
