import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/components.lib";
import React from "react";

// type CheckboxFavoriteT = {
//   checked: boolean;
//   onCheckedChange: (checked: boolean) => void;
// };

type CheckboxFavoriteT = React.ComponentProps<typeof Checkbox>;

export default function CheckboxFavorite({
  className,
  ...props
}: CheckboxFavoriteT) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="favorites"
        {...props}
        className={cn(
          "data-[state=checked]:bg-[#2057A9] data-[state=checked]:border-[#2057A9]",
          className
        )}
      />
      <label htmlFor="favorites" className="font-medium text-muted-foreground">
        Favoritos
      </label>
    </div>
  );
}
