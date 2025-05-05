import { ThemeProvider } from "@/components/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type ReactNode } from "react";

type ProvidersProps = { children?: ReactNode };

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ThemeProvider>
  );
}
