import TabsComponent from "./_components/TabsComponent";

export default function ProgressPage() {
  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir progreso */}
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Progreso
          </h1>
          <p className="font-semibold text-muted-foreground text-xl mt-1">
            Visualiza y analiza tu evolución física y de rendimiento.
          </p>
        </div>
      </header>

      <TabsComponent />
    </div>
  );
}
