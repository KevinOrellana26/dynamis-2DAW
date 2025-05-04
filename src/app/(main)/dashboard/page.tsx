import RoutineCard from "@/app/(main)/_components/RoutineCard";
import ExerciseCard from "@/app/(main)/_components/ExerciseCard";
import NewRoutineButton from "@/components/NewRoutineButton";
import Exercise from "@/mocks/exercise.json";
import Routines from "@/mocks/routines.json";
import RegisterCard from "../_components/RegisterCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";

export default async function Page() {
  const session = await getSession();

  //! SE PUEDE VERIFICAR SI HAY SESIÓN, PERO ES OPCIONAL PORQUE EL MIDDLEWARE YA LO HARÁ

  const mockExercises = Exercise;
  const mockRoutines = Routines.map((routine) => ({
    ...routine,
    createdAt: new Date(routine.createdAt), // Convierte "createdAt" a Date
  }));

  // Toma las primeras 4 rutinas.
  const latestExercise = mockExercises.slice(0, 4);

  //Ordena las rutinas por fecha (más reciente) y toma las tres primeras
  const latestRoutines = mockRoutines
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Dashboard
          </h1>
          <p className="font-light text-muted-foreground text-xl mt-2">
            Bienvenido de nuevo{" "}
            <span className="font-bold text-2xl">{session.name}</span> con rol{" "}
            {session.role}, aquí está tu resumen de actividad.
          </p>
        </div>
        <div className="my-3">
          <NewRoutineButton />
        </div>
      </div>

      {/* Cards de Actividad */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        <RegisterCard title="Entrenamientos" num={31} />
        <RegisterCard title="Ejercicios" num={50} />
        <RegisterCard title="Récords" num={12} />
      </div>

      {/* Cards Ejercicios recientes */}
      <div className="flex flex-col items-center md:flex-row md:justify-between my-5 gap-2">
        <h1 className="text-xl text-center md:text-2xl md:text-left font-bold">
          Ejercicios recientes
        </h1>

        <Button variant={"secondary"} className="cursor-pointer" asChild>
          <Link href={"/routine"}>Ver más</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {latestExercise.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard {...exercise} />
          </div>
        ))}
      </div>

      {/* Cards Rutinas */}
      <h1 className="text-xl text-center md:text-2xl md:text-left font-bold my-5">
        Mis rutinas
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestRoutines.map((routine) => (
          <RoutineCard key={routine.id} {...routine} />
        ))}
      </div>
    </div>
  );
}
