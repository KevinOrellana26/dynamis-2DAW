"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Dumbbell } from "lucide-react";
import { RoutineWithExerciseT } from "../_core/routines.db";
import RoutineDialog from "./RoutineDialog";

type RoutineCardProps = {
  routine: RoutineWithExerciseT;
};

export default function RoutineCard({ routine }: RoutineCardProps) {
  const {
    id: routineId,
    name,
    duration,
    createdAt,
    description,
    totalExercises,
  } = routine;

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Fecha no disponible";

  //Añadir a rutina
  //Eliminar de rutina

  return (
    <Card className="h-full flex flex-col gap-5 pt-6">
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-3">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-blue-900" />
          <span>
            {totalExercises} ejercicio{totalExercises !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-blue-900" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-900" />
          <span>Creado el: {formattedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* <EditRoutineDialog/> */}
        <RoutineDialog className="cursor-pointer" routine={routine} />
        <Button
          variant="dynamis"
          size="sm"
          // onClick={onView}
          className=" cursor-pointer"
        >
          Ver ejercicios
        </Button>
      </CardFooter>
    </Card>
  );
}
