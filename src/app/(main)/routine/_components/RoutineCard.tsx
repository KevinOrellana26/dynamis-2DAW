import { Exercise } from "@/generated/prisma";
import { Routine } from "@/generated/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ({
  name,
  description,
  totalExercise,
  duration,
  createdAt,
}: Routine) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{totalExercise}</p>
        <p>{duration}</p>
        <p>Creado el: {createdAt?.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <Button variant={"secondary"} size={"lg"}>
          Editar
        </Button>
        <Button variant={"dynamis"} size={"lg"}>
          Iniciar
        </Button>
      </CardFooter>
    </Card>
  );
}
