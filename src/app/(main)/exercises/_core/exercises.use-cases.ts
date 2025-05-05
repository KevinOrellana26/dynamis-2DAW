//Interactura con exercises.db.ts para obtener los datos.
import { getExercises, getUserExerciseFavorite } from "./exercises.db";
import type { Exercise } from "@/generated/prisma";

type GetExercisesParams = {
    query?: string;
    muscle?: string;
    showFavourites?: boolean;
    userId?: string;
}

//Caso de uso: obtener todos los ejercicios de la base de datos
export const getExercisesUseCase = async (options: GetExercisesParams): Promise<Exercise[]> => {
    const { query, muscle, showFavourites, userId } = options
    
    // TODO: pasar el id del usuario por parámetro (opcional) y obtener los favoritos del usuario
    if (showFavourites && userId) {
        const favoriteExercises = await getUserExerciseFavorite(userId)
        return favoriteExercises
    }
    
    // TODO: tanto el query como el muscle deben ser case insensitive (aceptar mayúsculas y minúsculas)
    const exercises = await getExercises()
    return exercises
}