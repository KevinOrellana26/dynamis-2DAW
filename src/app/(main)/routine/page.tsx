import NewRoutineButton from "@/components/NewRoutineButton";
import RoutineCard from "@/components/RoutineCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Routine from "@/mocks/routines.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rutina",
};

function Rutina() {
  const mockRoutines = Routine.map((routine) => ({
    ...routine,
    createdAt: new Date(routine.createdAt), // Convierte "createdAt" a Date
  }));

  //Ordena las rutinas por fecha (más reciente) y toma las tres primeras
  const latestRoutines = mockRoutines
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 7);

  // const [mockRoutines, setMockRoutines] = useState([]);
  // useEffect(() => {
  //   fetch("/src/mocks/routines.json")
  //     .then((response) => response.json())
  //     .then((data) => setMockRoutines(data));
  // });

  return (
    <div className="gap-5">
      <div className="flex flex-row gap-2 justify-between">
        <div className=" flex flex-col gap-2">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Mis Rutinas
          </h1>
          <p className="font-light text-muted-foreground text-xl mr-14">
            Gestiona y crea rutinas personalizadas.
          </p>
        </div>
        <div>
          <NewRoutineButton />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          {/* Debe de ser un formulario */}
          <Input
            type="search"
            placeholder="full body, upper body, lower body..."
            size={200}
          />
        </div>
        <div>
          <Button variant={"secondary"} type="submit">
            Filtrar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestRoutines.map((routine) => (
          <RoutineCard key={routine.id} {...routine} />
        ))}
      </div>

      <footer className="flex flex-row justify-center">
        <h1>Paginación</h1>
      </footer>
    </div>
  );
}

export default Rutina;
