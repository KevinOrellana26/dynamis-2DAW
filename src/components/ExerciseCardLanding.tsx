import { ExerciseT } from "@/app/(main)/exercises/_core/exercises.definitions";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

type ExerciseCardLandingProps = {
  exercise: Pick<ExerciseT, "name" | "muscle" | "videoImgUrl">;
};

export default function ExerciseCardLanding(props: ExerciseCardLandingProps) {
  const { name, muscle, videoImgUrl } = props.exercise;
  return (
    <Card>
      <div className="relative aspect-video overflow-hidden">
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
        </div>
      </CardContent>
    </Card>
  );
}
