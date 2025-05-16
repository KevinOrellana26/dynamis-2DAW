"use client";
import React from "react";
import { useServerAction } from "zsa-react";
import { updateExerciseToRoutineAction } from "../routines.actions";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
  UpdateExerciseToRoutineFormSchema,
  UpdateExerciseToRoutineFormT,
  UpdateExerciseToRoutineSchema,
  UpdateExerciseToRoutineT,
} from "../_core/routines.definitions";
import { zodResolver } from "@hookform/resolvers/zod";
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

type EditExerciseInRoutineFormProps = {
  exerciseId: number;
  series: number;
  repetitions: number;
  routineId: number;
};

export default function EditExerciseInRoutineForm(
  props: EditExerciseInRoutineFormProps
) {
  const { exerciseId, repetitions, series, routineId } = props;

  const form = useForm<UpdateExerciseToRoutineFormT>({
    resolver: zodResolver(UpdateExerciseToRoutineFormSchema),
    defaultValues: {
      repetitions: repetitions,
      series: series,
    },
  });

  // EDITAR DATOS DEL EJERCICIO EN LA RUTINA
  const { isPending, execute } = useServerAction(
    updateExerciseToRoutineAction,
    {
      onSuccess: ({ data: message }) => {
        toast.success(message);
      },
      onError: ({ err }) => {
        toast.error(err.message);
      },
    }
  );

  const handleSubmit = async (values: UpdateExerciseToRoutineFormT) => {
    execute({ ...values, exerciseId, routineId });
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="series"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Series</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repetitions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeticiones</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
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
          {isPending ? "Actualizando datos" : "Actualizar datos"}
        </Button>
      </form>
    </Form>
  );
}
