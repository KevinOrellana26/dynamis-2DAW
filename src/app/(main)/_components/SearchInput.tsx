import { Input } from "@/components/ui/input";
import React from "react";

type SearchInputT = {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
};

export default function SearchInput({
  placeholder,
  value,
  onChange,
  className,
}: SearchInputT) {
  return (
    <div className={`w-full ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
