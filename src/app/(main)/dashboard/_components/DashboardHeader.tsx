type DashboardHeaderProps = {
  name: string;
  role: string;
};

export default function DashboardHeader(props: DashboardHeaderProps) {
  const { name, role } = props;
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
          Dashboard
        </h1>
        <p className="font-semibold text-muted-foreground text-xl mt-2">
          Bienvenido de nuevo <span className="font-bold text-2xl">{name}</span>{" "}
          con rol {role}, aquí está tu resumen de actividad.
        </p>
      </div>
      <div className="my-3">{/* <NewRoutineButton /> */}</div>
    </div>
  );
}
