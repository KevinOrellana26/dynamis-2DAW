import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Rutinas",
};

export default async function RoutinesPage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <h1 className="text-4xl">Admin Routines</h1>
    </div>
  );
}
