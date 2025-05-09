"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";
import { GoCheckCircle } from "react-icons/go";
import { MdErrorOutline } from "react-icons/md";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      icons={{
        success: <GoCheckCircle className="h-5 w-5 text-accent-blue" />,
        error: <MdErrorOutline className="h-5 w-5 text-red-500" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
