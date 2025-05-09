import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import NumberedList from "../../_components/NumberedList";
import { ExerciseT } from "../_core/exercises.definitions";
import Image from "next/image";

type ExerciseDialogParams = {
  className?: string;
  disabled?: boolean;
  exercise: Omit<ExerciseT, "isFavorite" | "id">;
};

export default function ExerciseDialog({
  className,
  exercise,
  disabled,
}: ExerciseDialogParams) {
  const { name, muscle, videoImgUrl, description, executionSteps, tips } =
    exercise;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"dynamis"} className={className} disabled={disabled}>
          Ver detalles
        </Button>
      </DialogTrigger>

      {/* Implementación del DialogOverlay */}
      <DialogOverlay className="bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

      <DialogContent>
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl text-accent-blue text-center">
            {name}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {/* <DialogOverlay/> */}
        <div className="relative aspect-video rounded-lg overflow-hidden my-4 shadow-md">
          <Image
            alt={`Ejercicio ${name}`}
            src={videoImgUrl}
            fill
            className="object-cover"
            priority
          />
        </div>
        <ScrollArea className="px-6 h-[250px]">
          {/* AÑADIR ESTRELLA */}
          {/* <Button
              variant={"link"}
              size="icon"
              onClick={() =>
              isFavorite
              ? handleRemoveExerciseFromFavorites(exerciseId)
              : handleExerciseToFavorites(exerciseId)
              }
              className={"h-8 w-8 hover:text-accent-blue"}
              >
              <Star
              className={`h-5 w-5 ${
                isFavorite ? "text-accent-blue fill-accent-blue" : ""
                }`}
                />
                <span className="sr-only">
                {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                </span>
                </Button> */}
          <div className="mb-2">
            <strong className="text-accent-blue">Músculo:</strong>{" "}
            <span>{muscle}</span>
          </div>
          <NumberedList
            title="Cómo realizarlo correctamente"
            text={executionSteps}
            className="mb-2"
          />
          <NumberedList title="Consejos" text={tips} className="mb-2" />
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="dynamis" className="w-full">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
