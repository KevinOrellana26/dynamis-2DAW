import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExerciseT } from "../_core/exercises.definitions";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import NumberedList from "../../_components/NumberedList";

type ExerciseDialogParams = {
  className?: string;
  exercise: Omit<ExerciseT, "isFavorite" | "id">;
};

export default function ExerciseDialog({
  className,
  exercise,
}: ExerciseDialogParams) {
  const { name, muscle, videoImgUrl, description, executionSteps, tips } =
    exercise;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"dynamis"} className={className}>
          Ver detalles
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl text-accent-blue">
            {name}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden my-4 shadow-md">
          <Image
            alt={`Ejercicio ${name}`}
            src={videoImgUrl}
            fill
            className="object-cover"
            priority
          />
        </div>
        <ScrollArea className="px-4 h-[200px]">
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
            <Button variant="dynamis">Cerrar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
