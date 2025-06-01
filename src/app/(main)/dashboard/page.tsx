import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { handleAsync } from "@/app/_shared/errors";
import ErrorMessage from "../_components/ErrorMessage";
import ActivitySumary from "./_components/ActivitySumary";
import DashboardHeader from "./_components/DashboardHeader";
import ExerciseSection from "./_components/ExerciseSection";
import RoutineSection from "./_components/RoutineSection";
import {
  getExercisesDashboardUseCase,
  getFavoritesCountUseCase,
  getRoutinesCountUseCase,
  getRoutinesDashboardUseCase,
} from "./_core/dashboard.use-cases";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  //! SE PUEDE VERIFICAR SI HAY SESIÓN, PERO ES OPCIONAL PORQUE EL MIDDLEWARE YA LO HARÁ

  const session = await getSession();
  const { userId, name, role } = session;
  const [exercisesList, exerciseError] = await handleAsync(() =>
    getExercisesDashboardUseCase(userId)
  );

  const [routineList, routineError] = await handleAsync(() =>
    getRoutinesDashboardUseCase(userId)
  );

  const [favoriteCount, favoriteError] = await handleAsync(() =>
    getFavoritesCountUseCase(userId)
  );
  const [routineCount, routineCountError] = await handleAsync(() =>
    getRoutinesCountUseCase(userId)
  );

  if (!exercisesList || exercisesList.exercises.length === 0) {
    return (
      <ErrorMessage
        message={
          exerciseError?.message || "Ocurrio un error al cargar los ejercicios."
        }
        path="/dashboard"
      />
    );
  }

  if (!routineList || routineList.length === 0) {
    return (
      <ErrorMessage
        message={
          routineError?.message || "Ocurrio un error al cargar las rutinas."
        }
        path="/dashboard"
      />
    );
  }

  const { exercises } = exercisesList;
  // const favoriteCount = exercises.filter((ex) => ex.isFavorite).length;
  // const routineCount = routineList.length;

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <DashboardHeader name={name} />
      <ActivitySumary
        favoriteCount={favoriteCount ?? 0}
        routineCount={routineCount ?? 0}
      />
      <ExerciseSection exercises={exercises} />
      <RoutineSection routines={routineList} />
    </div>
  );
}
