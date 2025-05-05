//Interactura con exercises.db.ts para obtener los datos.
import { getExercises } from "./exercises.db";
import type { Exercise } from "@/generated/prisma";

//Caso de uso: obtener ejercicios 
export const getExercisesUseCase = async (): Promise<Exercise[]> => {
    //obtener datos desde la base de datos

    //datos-> usuario=favoritos
        //query (input) y musculos con case insensitive


    const exercises = await getExercises()
    return exercises
}