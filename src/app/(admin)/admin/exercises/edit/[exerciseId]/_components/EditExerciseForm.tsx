"use client";
import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";
import { useForm } from "react-hook-form";

import { options } from "@/app/(main)/exercises/_components/ComboboxMuscle";
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
import { Textarea } from "@/components/ui/textarea";
import { UploadButton } from "@/components/UploadThingClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import {
  EditExerciseFormSchema,
  EditExerciseFormT,
} from "../_core/edit-exercise.definitions";
import { editExerciseAction } from "../edit-exercise.actions";

type EditExerciseFormProps = {
  exercise: ExerciseT;
};

export default function EditExerciseForm({ exercise }: EditExerciseFormProps) {
  const { name, description, executionSteps, muscle, tips, videoImgUrl, id } =
    exercise;
  const router = useRouter();

  const form = useForm<EditExerciseFormT>({
    resolver: zodResolver(EditExerciseFormSchema),
    defaultValues: {
      name: name,
      muscle: muscle,
      videoImgUrl: videoImgUrl,
      description: description,
      executionSteps: executionSteps,
      tips: tips,
    },
  });

  const { isPending, execute } = useServerAction(editExerciseAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.push("/admin/exercises");
    },
    onError: ({ err }) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values: EditExerciseFormT) => {
    execute({ ...values, id: id });
  };

  const muscleOptions = options;
  const sortedMuscleOptions = muscleOptions.toSorted((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent-blue">Nombre</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Press Banca, Sentadilla..." />
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
              <FormLabel className="text-accent-blue">
                Descripción del ejercicio
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe el ejercicio..."
                  className="resize-none"
                  //   value={description}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="muscle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent-blue">Músculo</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Selecciona un musculo" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortedMuscleOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="executionSteps"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent-blue">
                Pasos para ejecutar el ejercicio
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe cada paso en una línea diferente..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tips"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent-blue">
                Consejos para realizar correctamente el ejercicio
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe cada consejo en una línea diferente..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="videoImgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      readOnly
                      placeholder="La URL aparecerá aquí tras subir la imagen"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* SUBIDA DE IMAGEN PARA EJERCICIO */}
            <UploadButton
              endpoint={"imageUploader"}
              className="ut-button:bg-accent-blue ut-button:hover:bg-blue-800 ut-button:ut-label:text-white ut-button:h-[37px] ut-button:text-sm"
              content={{
                button: ({ isUploading }) =>
                  isUploading ? "Subiendo imagen..." : "Subir imagen",
              }}
              onClientUploadComplete={(res) => {
                const url = res[0].ufsUrl;
                if (url) {
                  form.setValue("videoImgUrl", url),
                    toast.success("Imagen subida correctamente");
                }
              }}
              onUploadError={(error: Error) => {
                toast.error("Error al subir la imagen");
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button type="submit" variant={"dynamis"} isPending={isPending}>
            {isPending ? "Actualizando ejercicio" : "Actualizar ejercicio"}
          </Button>
          <Button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => form.reset()}
          >
            Eliminar contenido
          </Button>
        </div>
      </form>
    </Form>
  );
}
