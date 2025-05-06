import { Input } from "@/components/ui/input";
import { cn } from "@/lib/components.lib";
import React from "react";

type SearchInputT = React.ComponentProps<typeof Input>;

export default function SearchInput({ className, ...props }: SearchInputT) {
  return <Input type="search" {...props} className={cn("w-full", className)} />;
}
