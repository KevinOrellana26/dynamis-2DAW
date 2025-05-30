import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash } from "@/config/theme.config";
import React from "react";

export default function AdminExerciseCardSkeleton() {
  return (
    <Card>
      <Skeleton className="relative aspect-video overflow-hidden shadow-md rounded-t-xl object-cover" />
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            {/* Título del ejercicio */}
            <Skeleton className="h-5 w-40 mb-2" />
            {/* Músculo (Badge) */}
            <Skeleton className="h-6 w-16" />
          </div>
          {/* Botón de favoritos */}
          {/* <Skeleton className="size-8"> */}
          <Trash className="size-6 text-accent" />
          {/* </Skeleton> */}
        </div>
      </CardContent>
      <CardFooter>
        {/* Footer del ejercicio */}
        <Skeleton className="h-8 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}
