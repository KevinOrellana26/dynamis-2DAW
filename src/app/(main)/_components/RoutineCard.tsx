import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Routine } from "@/generated/prisma";
import { Clock, Dumbbell, Calendar } from "lucide-react";

interface RoutineCardProps
  extends Pick<
    Routine,
    "name" | "description" | "totalExercise" | "duration" | "createdAt"
  > {
  onEdit?: () => void;
  onView?: () => void;
}

export default function ({
  name,
  description,
  totalExercise,
  duration,
  createdAt,
  onEdit,
  onView,
}: RoutineCardProps) {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Fecha no disponible";

  return (
    <Card className="h-full flex flex-col gap-5 pt-6">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-3">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-blue-900" />
          <span>
            {totalExercise} ejercicio{totalExercise !== 1 ? "s" : ""}
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
        <Button
          variant={"secondary"}
          size="sm"
          className="cursor-pointer"
          onClick={onEdit}
        >
          Editar
        </Button>
        <Button
          variant="dynamis"
          size="sm"
          onClick={onView}
          className=" cursor-pointer"
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
