import BenefitsCard from "@/components/BenefitsCard";
import ExerciseCard from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import Exercise from "@/mocks/exercise.json";
import { ArrowRight, ChartLine, Dumbbell, ListChecks } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

function Home() {
  // ! CAMBIAR CUANDO HAGA CONSULTAS A LA BD
  const mockExercises = Exercise;
  const latestExercise = mockExercises.slice(0, 4);

  return (
    <div className="mx-3.5 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 py-4">
        {/* Sección Hero */}
        <main className="flex flex-col lg:flex-row">
          <div className="flex-1 space-y-6 content-center">
            <h1 className="font-semibold text-4xl md:text-6xl">
              Transforma tu cuerpo,{" "}
              <span className="text-accent-blue dark:text-accent-blue">
                transforma tu vida
              </span>
            </h1>
            <p className="font-semibold text-muted-foreground text-xl mr-14">
              Dýnamis te ayuda a alcanzar tus objetivos fitness con rutinas
              personalizadas y seguimiento de tu progreso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant={"dynamis"} size={"lg"} asChild>
                <Link href={"/login"}>
                  Empezar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={"/exercise"}>Explorar ejercicios</Link>
              </Button>
            </div>
          </div>

          {/* Imagen, oculta en dispositivos móviles */}
          <div className="hidden lg:block flex-1">
            <Image
              width={500}
              height={500}
              src={"/portada.png"}
              alt="persona entrenando"
              className="object-cover w-full h-full rounded-4xl"
            />
          </div>
        </main>

        {/* Sección Ejercicios Destacados */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="font-semibold text-4xl text-center md:text-left">
                Ejercicios Destacados
              </h1>
              <p className="font-light text-muted-foreground text-xl py-3">
                Descubre los ejercicios más populares de nuestra comunidad.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Button variant="outline" asChild>
                <Link href="/login">Ver todos</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {latestExercise.map((exercise) => (
              <div key={exercise.id}>
                <ExerciseCard {...exercise} />
              </div>
            ))}
          </div>
        </section>

        {/* Sección Beneficios */}
        <section className="space-y-4">
          <h1 className="font-semibold text-4xl text-center">
            ¿Por qué elegir Dýnamis?
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <BenefitsCard
                title="Biblioteca de Ejercicios"
                subtitle="Accede a una lista de ejercicios con instrucciones detalladas y videos demostrativos."
                icon={<Dumbbell className="h-8 w-8 text-accent-blue" />}
              />
            </div>
            <div className="flex-1">
              <BenefitsCard
                title="Rutinas Personalizadas"
                subtitle="Crea rutinas adaptadas a tus objetivos, nivel de experiencia y tiempo disponible."
                icon={<ChartLine className="h-8 w-8 text-accent-blue" />}
              />
            </div>
            <div className="flex-1">
              <BenefitsCard
                title="Seguimiento de Progreso"
                subtitle="Visualiza tu evolución con gráficos detallados y estadísticas personalizadas."
                icon={<ListChecks className="h-8 w-8 text-accent-blue" />}
              />
            </div>
          </div>
        </section>

        {/* Sección CTA */}
        <footer className="bg-[#2057A9] text-white p-6 rounded-2xl flex flex-col sm:flex-col lg:flex-row justify-between">
          <div>
            <h1 className="font-semibold text-4xl text-center md:text-left">
              Regístrate para guardar tu progreso
            </h1>
            <p className="font-light text-gray-200 text-xl py-4">
              Crea una cuenta gratis para guardar tus ejercicios favoritos y
              hacer seguimiento de tus progreso.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button variant={"secondary"} asChild>
              <Link href={"/login"}>Crear cuenta</Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
