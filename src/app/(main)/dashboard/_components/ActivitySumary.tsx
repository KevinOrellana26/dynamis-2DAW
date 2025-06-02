import React from "react";
import RegisterCard from "../../_components/RegisterCard";

type ActivitySumaryProps = {
  favoriteCount: number;
  routineCount: number;
};

export default function ActivitySumary(props: ActivitySumaryProps) {
  const { favoriteCount, routineCount } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
      <RegisterCard title="Entrenamientos" num={"Próximamente..."} />
      <RegisterCard
        title="Favoritos"
        num={favoriteCount > 0 ? favoriteCount : "Aún no tienes favoritos"}
      />
      <RegisterCard
        title="Rutinas"
        num={routineCount > 0 ? routineCount : "Aún no tienes rutinas"}
      />
    </div>
  );
}
