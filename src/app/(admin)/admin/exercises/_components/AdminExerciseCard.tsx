"use client";
import ExerciseDialog from "@/app/(main)/exercises/_components/ExerciseDialog";
import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Spinner, Edit, Trash } from "@/config/theme.config";
import Image from "next/image";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { removeExerciseAction } from "../admin.exercises.actions";
import Link from "next/link";

type AdminExerciseCardProps = {
  exercise: ExerciseT;
};

export default function AdminExerciseCard(props: AdminExerciseCardProps) {
  const { exercise } = props;
  const { id: exerciseId, name, muscle, videoImgUrl } = exercise;

  //Eliminar ejercicio
  const { execute, isPending: isRemoving } = useServerAction(
    removeExerciseAction,
    {
      onSuccess: ({ data: message }) => {
        toast.success(message);
      },
      onError: ({ err }) => {
        toast.error(err.message);
      },
    }
  );

  const handleRemoveExercise = async () => {
    await execute({ exerciseId });
  };

  return (
    <Card>
      <div className="relative aspect-video overflow-hidden shadow-md">
        {videoImgUrl ? (
          <Image
            src={videoImgUrl}
            alt={name}
            fill
            priority
            className="rounded-t-xl object-cover"
          />
        ) : null}
      </div>
      <CardContent>
        <div className="flex items-start justify-between">
          <div className="gap-1">
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant={"outline"}>{muscle}</Badge>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <Link href={`/admin/exercises/edit/${exerciseId}`}>
              <Button
                variant={"link"}
                size={"icon"}
                className="hover:text-accent-blue"
              >
                <Edit className="size-6" />
              </Button>
            </Link>
            <Button
              variant={"link"}
              size={"icon"}
              onClick={handleRemoveExercise}
              className="size-8 hover:text-red-600"
            >
              {isRemoving ? (
                <Spinner className="h-8 w-8 animate-spin text-accent-blue" />
              ) : (
                <Trash className="size-6 " />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <ExerciseDialog
          exercise={exercise}
          className="w-full"
          disabled={isRemoving}
        />
      </CardFooter>
    </Card>
  );
}
