import { Input } from "@/components/ui/input";
import { cn } from "@/lib/components.lib";
import { SearchIcon } from "lucide-react";
import React from "react";

type SearchInputT = React.ComponentProps<typeof Input>;

export default function SearchInput({ className, ...props }: SearchInputT) {
  return (
    //lo establexco en relativo, para que los hijos con absolute se posicionen en relación al contenedor
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform opacity-50" />
      <Input type="search" {...props} className={cn("pl-9", className)} />
    </div>
  );
}
