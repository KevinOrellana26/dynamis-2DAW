"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/components.lib";
import { useState } from "react";

const options = [
  // { value: "", label: "-- Seleccionar músculo --" }, //opción por defecto, no se acepta un valor ""
  { value: "pecho", label: "Pecho" },
  { value: "pierna", label: "Pierna" },
  { value: "espalda", label: "Espalda" },
  { value: "abdomen", label: "Abdomen" },
  { value: "hombro", label: "Hombro" },
  { value: "bíceps", label: "Bíceps" },
  { value: "tríceps", label: "Tríceps" },
  { value: "pantorrilla", label: "Pantorrilla" },
];

type ComboboxMuscleProps = {
  value: string;
  className?: string;
  onValueChange: (value: string) => void;
};

export default function ComboboxMuscle(params: ComboboxMuscleProps) {
  const { value, className, onValueChange } = params;
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between text-muted-foreground border hover:border-accent-blue",
            className
          )}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Selecciona Músculo"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscando músculo..." className="h-9" />
          <CommandList>
            <CommandEmpty>Músculo no encontrado.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
