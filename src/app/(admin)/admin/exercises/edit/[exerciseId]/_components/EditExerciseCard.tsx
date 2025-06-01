import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import EditExerciseForm from "./EditExerciseForm";

type EditExerciseCardProps = {
  exercise: ExerciseT;
};

export default function EditExerciseCard({ exercise }: EditExerciseCardProps) {
  const { name, id, videoImgUrl } = exercise;
  return (
    <Card className="mx-4 md:mx-20 my-10 p-2">
      <div className="flex flex-col md:flex-row gap-6 p-4+">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative aspect-video">
          <Image
            src={videoImgUrl}
            alt={name}
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between p-2 gap-4">
          <CardHeader>
            <CardTitle className="text-3xl text-accent-blue">
              Editar: {name}
            </CardTitle>
            <CardDescription>ID del ejercicio: {id}</CardDescription>
          </CardHeader>

          <CardContent>
            <EditExerciseForm exercise={exercise} />
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
