"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import {
  CreateRoutineSchema,
  CreateRoutineT,
  ExerciseT,
  SelectedExerciseT,
} from "../_core/routines.definitions";
import { createRoutineAction } from "../routines.actions";

type CreateRoutineFormProps = {
  exercisesList: ExerciseT[];
  onCloseDialog?: () => void;
};
const CreateRoutineClientSchema = CreateRoutineSchema.omit({ userId: true });

export default function CreateRoutineForm(params: CreateRoutineFormProps) {
  const { exercisesList, onCloseDialog } = params;
  const router = useRouter();

  //1. Defino la forma del formulario
  const form = useForm<Omit<CreateRoutineT, "userId">>({
    resolver: zodResolver(CreateRoutineClientSchema),
    defaultValues: {
      name: "",
      description: "",
      exercises: [],
    },
  });

  const { watch, setValue } = form;
  const selected = watch("exercises") || [];

  const toggleExercise = (exercise: ExerciseT) => {
    const index = selected.findIndex(
      (e: SelectedExerciseT) => e.exerciseId === exercise.id
    );
    if (index === -1) {
      const newExercise = {
        exerciseId: exercise.id,
        series: 3, //valor por defecto
        repetitions: 10, //valor por defecto
      };
      setValue("exercises", [...selected, newExercise]);
    } else {
      const newSelected = [...selected];
      newSelected.splice(index, 1);
      setValue("exercises", newSelected);
    }
  };

  const isSelected = (id: number): boolean => {
    return selected.some((e: SelectedExerciseT) => e.exerciseId === id);
  };

  //2. Llamo a la server action
  const { isPending, execute } = useServerAction(createRoutineAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.refresh();
      onCloseDialog?.(); //cierra el dialog si se pudo crear la rutina
    },
    onError: ({ err }) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  //Ejecuto la acción
  const handleSubmit = async (values: Omit<CreateRoutineT, "userId">) => {
    console.log("Valores que llegan al submit:", values);
    execute({ ...values });
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

        {/* Lista de ejercicios */}
        <FormLabel>Ejercicios</FormLabel>
        <ScrollArea className="px-6 h-[350px]">
          <div className="space-y-4">
            {exercisesList.map((exercise) => {
              const isChecked = isSelected(exercise.id);

              return (
                <FormField
                  key={exercise.id}
                  control={form.control}
                  name="exercises"
                  render={() => (
                    <FormItem
                      key={exercise.id}
                      className="border p-3 rounded-md space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            id={`exercise-${exercise.id}`}
                            checked={isChecked}
                            onCheckedChange={() => toggleExercise(exercise)}
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={`exercise-${exercise.id}`}
                          className="text-sm font-medium leading-none"
                        >
                          {exercise.name}
                        </FormLabel>
                      </div>

                      {isChecked && (
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <FormField
                            control={form.control}
                            name={`exercises.${selected.findIndex(
                              (e) => e.exerciseId === exercise.id
                            )}.series`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Series</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="number"
                                    min={1}
                                    onChange={(e) =>
                                      field.onChange(
                                        parseInt(e.target.value, 10)
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`exercises.${selected.findIndex(
                              (e) => e.exerciseId === exercise.id
                            )}.repetitions`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Repeticiones</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="number"
                                    min={1}
                                    onChange={(e) =>
                                      field.onChange(
                                        parseInt(e.target.value, 10)
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
        </ScrollArea>

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
