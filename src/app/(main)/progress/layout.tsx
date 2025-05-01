import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progreso",
};

export default function RoutineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
