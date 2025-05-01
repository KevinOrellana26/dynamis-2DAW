"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Progress } from "@/generated/prisma/client";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ProgressChartT = {
  progressData: Progress[];
  exerciseName: string;
  chartType?: "line" | "bar";
}

export function ProgressChart({
  progressData,
  exerciseName,
  chartType = "line",
}: ProgressChartT) {
  // Ordenar por fecha
  const sortedData = [...progressData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const data = {
    labels: sortedData.map((item) =>
      new Date(item.date).toLocaleDateString("es-ES")
    ),
    datasets: [
      {
        label: `Peso (kg) - ${exerciseName}`,
        data: sortedData.map((item) => item.weight_used),
        borderColor: "rgb(32, 87, 169)",
        backgroundColor: "rgba(32, 87, 169, 0.5)",
        tension: 0.1,
      },
      {
        label: `Repeticiones - ${exerciseName}`,
        data: sortedData.map((item) => item.repetitions),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Progreso de ${exerciseName}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      {chartType === "line" ? (
        <Line data={data} options={options} />
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
}
