import { z } from "zod";

//DEFINITIONS -> Define la estructura completa de una rutina. Util para describir como se almacenan los datos en la BD
//o como se devuelven desde el backend. Útil para adaptadores o transformación de datos.

//TIPO BÁSICO DE UN EJERCICIO
export const ExerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export type ExerciseT = z.infer<typeof ExerciseSchema>;

//TIPO EXTENDIDO PARA LA RUTINA
export const SelectedExerciseSchema = z.object({
  exerciseId: z.number(), // Solo el ID del ejercicio
  series: z.number().min(1, { message: "Debe ser al menos una serie." }),
  repetitions: z
    .number()
    .min(1, { message: "Debe ser al menos una repetición." }),
});
export type SelectedExerciseT = z.infer<typeof SelectedExerciseSchema>;

//ESQUEMA Y TIPO PARA CREAR LA RUTINA
export const CreateRoutineSchema = z.object({
  userId: z.string(),
  name: z.string().min(1, { message: "El nombre es obligatorio." }),
  description: z.string().min(1, { message: "La descripción es obligatoria." }),
  exercises: z.array(SelectedExerciseSchema).min(1, {
    message: "Debe seleccionar al menos un ejercicio.",
  }),
});
export type CreateRoutineT = z.infer<typeof CreateRoutineSchema>;

//ESQUEMA Y TIPO PARA ELIMINAR UNA RUTINA
export const RemoveRoutineSchema = z.object({
  userId: z.string(),
  routineId: z.number(),
});
export type RemoveRoutineT = z.infer<typeof RemoveRoutineSchema>;

//ESQUEMA Y TIPO PARA ACTUALIZAR UNA RUTINA
export const UpdateExerciseToRoutineSchema = z.object({
  userId: z.string(),
  exerciseId: z.number(),
  routineId: z.number(),
  series: z.number().min(1, { message: "La serie debe ser mayor a 0." }),
  repetitions: z
    .number()
    .min(1, { message: "Las repeticiones deben ser mayores a 0." }),
});
export type UpdateExerciseToRoutineT = z.infer<
  typeof UpdateExerciseToRoutineSchema
>;
export const UpdateExerciseToRoutineFormSchema =
  UpdateExerciseToRoutineSchema.omit({
    userId: true,
    exerciseId: true,
    routineId: true,
  });
export type UpdateExerciseToRoutineFormT = z.infer<
  typeof UpdateExerciseToRoutineFormSchema
>;

export const DeleteExerciseToRoutineSchema = z.object({
  userId: z.string(),
  exerciseId: z.number(),
  routineId: z.number(),
});
export type DeleteExerciseToRoutineT = z.infer<
  typeof DeleteExerciseToRoutineSchema
>;
