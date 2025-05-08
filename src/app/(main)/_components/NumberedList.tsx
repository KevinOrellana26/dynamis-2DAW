import React from "react";

interface NumberedListProps {
  title: string;
  text: string;
  className?: string;
}

export default function NumberedList(params: NumberedListProps) {
  const { text, title, className } = params;
  return (
    <div className={className}>
      <strong className="text-accent-blue">{title}:</strong>
      <ol className="list-decimal pl-5">
        {text
          .split("\n") // divide el texto en lineas (cuando encuentre un \n)
          .filter((step) => step.trim() !== "") // Filtra líneas vacías
          .map((step, index) => ( //convierte cada linea en una lista
            <li key={index} className="my-1">
              {step.trim()}
            </li>
          ))}
      </ol>
    </div>
  );
}
