import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar Ejercicio",
};

export default function EditExerciseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
