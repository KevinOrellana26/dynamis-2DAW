"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Dumbbell } from "lucide-react";
import { RoutineWithExerciseT } from "../_core/routines.db";
import DeleteRoutineDialog from "./DeleteRoutineDialog";
import RoutineDialog from "./RoutineDialog";
import { formatDate } from "@/lib/utils";
import { User } from "@/config/theme.config";

type RoutineCardProps = {
  routine: RoutineWithExerciseT;
  role?: string;
};

export default function RoutineCard({ routine, role }: RoutineCardProps) {
  const { name, createdAt, description, exerciseRoutine } = routine;

  const formattedDate = formatDate(createdAt);

  return (
    <Card className="h-full flex flex-col gap-5 pt-6">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-2">
          <CardTitle className="text-3xl">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <DeleteRoutineDialog routine={routine} />
      </CardHeader>

      <CardContent className="grid gap-3">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-blue-900" />
          {exerciseRoutine.length}
          <span>ejercicio{exerciseRoutine.length !== 1 ? "s" : ""}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-900" />
          <span>Creado el: {formattedDate}</span>
        </div>
        {role === "ADMIN" ? (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-900" />
            <span>
              Creado por: {" "}
              <span className="text-accent-blue underline">{routine.user.email}</span>
            </span>
          </div>
        ) : null}
      </CardContent>
      <CardFooter>
        <RoutineDialog className="w-full" routine={routine} />
      </CardFooter>
    </Card>
  );
}
