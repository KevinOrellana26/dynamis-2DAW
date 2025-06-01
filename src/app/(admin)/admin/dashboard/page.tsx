import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import RegisterCard from "@/app/(main)/_components/RegisterCard";
import { handleAsync } from "@/app/_shared/errors";
import { Metadata } from "next";
import AdminDashboardHeader from "./_components/AdminDashboardHeader";
import {
  getTotalExercisesUseCase,
  getTotalRoutinesUseCase,
  getTotalUsersUseCase,
} from "./_core/admin-dashboard.use-cases";
import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import { Button } from "@/components/ui/button";
import { ClipboardList, PlusCircle } from "lucide-react";
import AdminDashboardActions from "./_components/AdminDashboardActions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function DashboardPage() {
  const session = await getSession();
  const { name, role } = session;

  const [totalExercises, errorExercises] = await handleAsync(() =>
    getTotalExercisesUseCase(role)
  );

  const [totalUsers, errorUser] = await handleAsync(() =>
    getTotalUsersUseCase(role)
  );

  const [totalRoutines, errorRoutines] = await handleAsync(() =>
    getTotalRoutinesUseCase(role)
  );

  if (!totalExercises || totalExercises <= 0) {
    return (
      <ErrorMessage
        message={
          errorExercises?.message ||
          "Ocurrio un error al cargar los ejercicios."
        }
        path="/dashboard"
      />
    );
  }
  if (!totalUsers || totalUsers <= 0) {
    return (
      <ErrorMessage
        message={
          errorUser?.message || "Ocurrio un error al cargar los usuarios."
        }
        path="/dashboard"
      />
    );
  }
  if (!totalRoutines || totalRoutines <= 0) {
    return (
      <ErrorMessage
        message={
          errorRoutines?.message || "Ocurrio un error al cargar las rutinas."
        }
        path="/dashboard"
      />
    );
  }

  return (
    <div className="flex flex-col mx-3 px-6 md:px-8 my-8 gap-5">
      <AdminDashboardHeader name={name} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        <RegisterCard
          title="Usuarios registrados"
          key={"usuariosRegistrados"}
          num={totalUsers}
        />
        <RegisterCard
          title="Total de ejercicios"
          key={"totalEjercicios"}
          num={totalExercises}
        />
        <RegisterCard
          title="Total de rutinas"
          key={"totalRutinas"}
          num={totalRoutines}
        />
      </div>

      <div className="text-center md:text-left my-4">
        <h1 className="font-semibold text-2xl md:text-4xl text-accent-blue dark:text-accent-blue">
          Acciones rápidas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <AdminDashboardActions />
      </div>
    </div>
  );
}
