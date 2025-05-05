import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TbX } from "react-icons/tb";

type SelectMuscleT = {
  value: string;
  className?: string;
  onValueChange: (value: string) => void;
  onClear?: () => void;
};

const options = [
  // { value: "", label: "-- Seleccionar músculo --" }, //opción por defecto, no se acepta un valor ""
  { value: "pecho", label: "Pecho" },
  { value: "pierna", label: "Pierna" },
  { value: "espalda", label: "Espalda" },
  { value: "abdomen", label: "Abdomen" },
];

export default function SelectMuscle({
  value,
  className,
  onValueChange,
  onClear,
}: SelectMuscleT) {
  return (
    <div className="flex gap-2 items-center">
      <Select
        value={value}
        onValueChange={(selectedValue) => {
          onValueChange(selectedValue);
        }}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder="-- Selecciona Músculo --" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {onClear && (
        <Button variant={"ghost"} onClick={onClear}>
          <TbX className="size-3" />
        </Button>
      )}
    </div>
  );
}
