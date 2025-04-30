import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Exercise } from "@/generated/prisma";
import { Star } from "lucide-react";
import Image from "next/image";

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
            className={`h-8 w-8 hover:text-yellow-600 cursor-pointer`}
          >
            <Star className={`h-5 w-5`} />
            <span className="sr-only">Favorito</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full cursor-pointer" variant={"secondary"}>
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
