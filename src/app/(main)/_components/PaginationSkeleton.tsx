import { Skeleton } from "@/components/ui/skeleton";

export default function PaginationSkeleton() {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {/* Botón anterior */}
      <Skeleton className="h-8 w-12 rounded-md" />
      {/* Números de páginas */}
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="size-8 rounded-md" />
      ))}
      {/* Botón siguiente */}
      <Skeleton className="h-8 w-12 rounded-md" />
    </div>
  );
}
