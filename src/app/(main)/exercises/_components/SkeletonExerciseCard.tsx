// Skeleton: replicar la estructura de la card de ejercicio pero reemplazando los elementos dinámicos por componentes Skeleton para simular la carga

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonExerciseCard() {
  return (
      <Card>
        <div className="relative aspect-video overflow-hidden shadow-md">
          <Skeleton className="w-full h-full" />
        </div>
        <CardContent>
          <div className="flex items-start justify-between">
            <div>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
  );
}
