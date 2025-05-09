import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rutinas",
};

export default function RoutineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
