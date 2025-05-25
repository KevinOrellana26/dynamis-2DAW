import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Ejercicios",
};

export default async function ExercisesPage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <h1 className="text-4xl">Admin Exercises</h1>
    </div>
  );
}
