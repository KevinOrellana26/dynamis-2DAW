import ExerciseCard from "@/app/(main)/dashboard/_components/ExerciseCard";
import NewRoutineButton from "@/components/NewRoutineButton";
import Exercise from "@/mocks/exercise.json";
import Routines from "@/mocks/routines.json";
import { Metadata } from "next";
import ActivitiesCard from "./_components/ActivitiesCard";
import RoutineCard from "@/components/RoutineCard";
// import { middleware } from "@/app/(auth)/_core/auth/auth.lib";
// import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  // const session = await auth();

  // if (!session?.user) {
  //redirige al login si no hay sesión
  //   redirect("/login");
  // }

  const mockExercises = Exercise;
  const mockRoutines = Routines.map((routine) => ({
    ...routine,
    createdAt: new Date(routine.createdAt), // Convierte "createdAt" a Date
  }));

  //Ordena las rutinas por fecha (más reciente) y toma las tres primeras
  const latestRoutines = mockRoutines
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className="gap-5">
      <div className="flex flex-row gap-2 justify-between">
        <div className=" flex flex-col gap-2">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Dashboard
          </h1>
          <p className="font-light text-muted-foreground text-xl mr-14">
            Bienvenido de nuevo [username], aquí está tu resumen de actividad.
          </p>
        </div>
        <div>
          <NewRoutineButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ActivitiesCard title="Entrenamientos" num={31} />
        <ActivitiesCard title="Ejercicios" num={50} />
        <ActivitiesCard title="Récords" num={12} />
      </div>

      <h1 className="text-2xl font-bold">Ejercicios recientes</h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mockExercises.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard {...exercise} />
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold">Mis rutinas</h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestRoutines.map((routine) => (
          <RoutineCard key={routine.id} {...routine} />
        ))}
      </div>
    </div>
  );
}
