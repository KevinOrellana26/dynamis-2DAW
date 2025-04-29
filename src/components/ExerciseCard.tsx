import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Exercise } from "@/generated/prisma";

import Image from "next/image";

// type Exercise = {
//   id: number | string;
//   nombre: string;
//   musculo: string;
//   img: string;
// };

export default function ExerciseCard({
  name,
  muscle,
  video_img_url,
}: Exercise) {
  return (
    <Card>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video_img_url}
          alt={name}
          fill //Ocupa todo el espacio del contenedor padre (div)
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
          {/* <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 hover:text-yellow-600`}
          >
            <Star className={`h-5 w-5`} />
            <span className="sr-only">Favorito</span>
          </Button> */}
        </div>

        {/* <CardTitle>{nombre}</CardTitle>
        <Badge variant="outline">{musculo}</Badge>
        <Button variant={"destructive"}>
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
        </Button> */}
      </CardContent>
    </Card>
  );
}
