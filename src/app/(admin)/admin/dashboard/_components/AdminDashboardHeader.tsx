type AdminDashboardHeaderProps = {
  name: string;
};

export default function AdminDashboardHeader({
  name,
}: AdminDashboardHeaderProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
          Dashboard Administrador
        </h1>
        <p className="font-semibold text-muted-foreground text-xl mt-2">
          Bienvenido de nuevo <span className="font-bold text-2xl">{name}.</span>
        </p>
      </div>
    </div>
  );
}
