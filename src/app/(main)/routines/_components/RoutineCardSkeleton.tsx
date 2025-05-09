import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, Dumbbell } from "lucide-react";
import React from "react";

export default function RoutineCardSkeleton() {
  return (
    <Card className="h-full flex flex-col gap-5 pt-6">
      {/* Header */}
      <CardHeader className="space-y-2">
        {/* Título */}
        <Skeleton className="h-8 w-3/4" />

        {/* Descripción */}
        <Skeleton className="h-4 w-2/4" />
      </CardHeader>

      {/* Content */}
      <CardContent className="grid gap-3">
        {/* Numero de ejercicios */}
        <div className="flex items-center gap-2">
          {/* Ícono */}
          <Dumbbell className="size-4 text-accent" />
          {/* Texto */}
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Tiempo */}
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-accent" />
          <Skeleton className="h-4 w-10" />
        </div>
        {/* Fecha creacion */}
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-accent" />
          <Skeleton className="h-4 w-2/4" />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Botón Editar */}
        <Skeleton className="h-9 w-full rounded-md" />
        {/* Botón Ver detalles */}
        <Skeleton className="h-9 w-full rounded-md" />{" "}
      </CardFooter>
    </Card>
  );
}
