import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

type CheckboxFavoriteT = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export default function CheckboxFavorite({
  checked,
  onCheckedChange,
}: CheckboxFavoriteT) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="favorites"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-[#2057A9] data-[state=checked]:border-[#2057A9]"
      />
      <label htmlFor="favorites" className="font-medium text-muted-foreground">
        Favoritos
      </label>
    </div>
  );
}
