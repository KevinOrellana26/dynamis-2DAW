import React from "react";
import RegisterCard from "../../_components/RegisterCard";
import { ProgressChart } from "./ProgressChart";
import ProgressData from "@/mocks/progress.json";

export default function SummarizeComponent() {
  // Convertir las fechas string a objetos Date
  const progressData = ProgressData.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <RegisterCard title="Peso Actual" num={78.5} />
        <RegisterCard title="Press Banca" num={85} />
        <RegisterCard title="Entrenamientos" num={24} />
      </div>

      {/* Poner chart.js */}
      {/* Gráficos de progreso */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <ProgressChart
            progressData={progressData}
            exerciseName="Press Banca"
            chartType="line"
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <ProgressChart
            progressData={progressData}
            exerciseName="Press Banca"
            chartType="bar"
          />
        </div>
      </div>
    </>
  );
}
