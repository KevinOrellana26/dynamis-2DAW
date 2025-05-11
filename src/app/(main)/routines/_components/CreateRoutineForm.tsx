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
  CreateRoutineFormSchema,
  CreateRoutineFormT,
} from "../_core/routines.types";
import { createRoutineAction } from "../routines.actions";

type CreateRoutineFormProps = {
  onCloseDialog?: () => void;
};

export default function CreateRoutineForm({
  onCloseDialog,
}: CreateRoutineFormProps) {
  const router = useRouter();

  // Esquema de formulario para validación.
  const form = useForm<CreateRoutineFormT>({
    resolver: zodResolver(CreateRoutineFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { isPending, execute } = useServerAction(createRoutineAction, {
    onSuccess: ({ data: message }) => {
      console.log("Éxito:", message);
      toast.success(message);
      router.refresh();
      onCloseDialog?.(); //cierra el dialog si se pudo crear la rutina
    },
    onError: ({ err }) => {
      console.log("Error en la acción del servidor:", err);
      console.log(err);
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: CreateRoutineFormT) => {
    console.log("Valores que llegan al submit:", values);
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
                <Input
                  {...field}
                  type="text"
                  placeholder="Rutina de pierna, Rutina de pecho..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Rutina enfocada en cuadriceps..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="dynamis"
          className="w-full"
          isPending={isPending}
          onClick={() => console.log("Botón presionado, isPending:", isPending)}
        >
          {isPending ? "Creando rutina" : "Crear rutina"}
        </Button>
      </form>
    </Form>
  );
}
