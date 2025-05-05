//SOLO interactua con la base de datos

import { NotFoundError } from "@/app/_shared/errors";
import { Exercise, Favorite } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

//TODO: modificar esta query para que acepte parametros opcionales (query y muscle)
export const getExercises = async () => {
    let exercises: Exercise[]
    try {
        exercises = await prisma.exercise.findMany()
    } catch (error) {
        console.log("Error", error)
        const message = "No se han encontrado ejercicios."
        throw new Error(message)
    }

    if (exercises.length <= 0) {
        const message = "No se han encontrado ejercicios."
        throw new NotFoundError(message)
    }
    return exercises
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
type FavouriteWithExerciseT = {
    id: number;
    user_id: string;
    exercise_id: number;
    exercise: Exercise;
};

export const getUserExerciseFavorite = async (userId: string): Promise<Exercise[]> => {
    let favourites: FavouriteWithExerciseT[];
    try {
        favourites = await prisma.favorite.findMany({
            where: { user_id: userId },
            include: {
                exercise: true
            }
        })
    } catch (error) {
        console.log("Error", error)
        const message = "No se han encontrado ejercicios favoritos."
        throw new Error(message)
    }


    if (favourites.length <= 0) {
        const message = "No se han encontrado favoritos."
        throw new NotFoundError(message)
    }
    // Transformamos el resultado, ya que solo queremos devolver los datos de los ejericios favoritos, 
    // mapeamos el array para extraer solo la parte exercise de cada favorito
    return favourites.map(fav => fav.exercise)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO: deleteFavoriteUserExercise -> cuando se pulse el botón de estrella, se debe de eliminar de la lista de favoritos del usuario.


// export const getExerciseById = async (id: number) => {
//     return await prisma.exercise.findUnique({ where: { id } })
// }

