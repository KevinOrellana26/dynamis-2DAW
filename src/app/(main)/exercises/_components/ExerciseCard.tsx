"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import {
  addExerciseToFavoritesAction,
  removeExerciseFromFavoritesAction,
} from "../exercises.actions";
import { ExerciseT } from "../_core/exercises.definitions";
import ExerciseDialog from "./ExerciseDialog";
import { RiLoader2Fill } from "react-icons/ri";

type ExerciseCardProps = {
  exercise: ExerciseT;
};
export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const { id: exerciseId, name, muscle, videoImgUrl, isFavorite } = exercise;

  /*AÑADIR  FAVORITO*/
  const { execute, isPending: isAdding } = useServerAction(
    addExerciseToFavoritesAction,
    {
      onSuccess: ({ data: message }) => {
        toast.success(message);
      },
      onError: ({ err }) => {
        toast.error(err.message);
      },
    }
  );

  /* ELIMINAR FAVORITO*/
  const { execute: executeRemove, isPending: isRemoving } = useServerAction(
    removeExerciseFromFavoritesAction,
    {
      onSuccess: ({ data: message }) => {
        toast.success(message);
      },
      onError: ({ err }) => {
        toast.error(err.message);
      },
    }
  );

  const handleFavoriteClick = async () => {
    if (isFavorite) {
      await executeRemove({ exerciseId });
    } else {
      await execute({ exerciseId });
    }
  };

  return (
    <Card key={exerciseId}>
      <div className="relative aspect-video overflow-hidden shadow-md">
        <Image
          src={videoImgUrl}
          alt={name}
          fill //Ocupa todo el espacio del contenedor padre (div)
          priority
          className="rounded-t-2xl object-cover"
        />
      </div>
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant="outline" className="mt-1">
              {muscle}
            </Badge>
          </div>
          <Button
            variant={"link"}
            size="icon"
            onClick={handleFavoriteClick}
            // disabled={isAdding || isRemoving}
            className={"h-8 w-8 hover:text-accent-blue"}
          >
            {isAdding || isRemoving ? (
              <RiLoader2Fill className="h-8 w-8 animate-spin text-accent-blue" />
            ) : (
              <Star
                className={`h-5 w-5 ${
                  isFavorite ? "text-accent-blue fill-accent-blue" : ""
                }`}
              />
            )}

            <span className="sr-only">
              {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            </span>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <ExerciseDialog
          exercise={exercise}
          className="w-full"
          disabled={isAdding || isRemoving}
        />
      </CardFooter>
    </Card>
  );
}
