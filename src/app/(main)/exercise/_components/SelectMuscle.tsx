import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectMuscleT = {
  value: string;
  className?: string;
  onValueChange: (value: string) => void;
};

export default function SelectMuscle({ value, className, onValueChange }: SelectMuscleT) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Seleccione un músculo" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pecho">Pecho</SelectItem>
        <SelectItem value="pierna">Pierna</SelectItem>
        <SelectItem value="espalda">Espalda</SelectItem>
        <SelectItem value="abdomen">Abdomen</SelectItem>
      </SelectContent>
    </Select>
  );
}
