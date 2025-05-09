"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { parseAsInteger, useQueryStates } from "nuqs";

type PaginationProps = {
  totalPages: number;
  showPage?: number;
  classname?: string;
};

export default function PaginationComponent(params: PaginationProps) {
  const { totalPages, classname, showPage = 3 } = params;
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };
  //nuqs sincroniza el estado de la página actual en la URL
  const [pageState, setPageState] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
    },
    options
  );

  const currentPage = pageState.page;

  //maneja el estado de la página
  const handlePageChange = (newPage: number) => {
    setPageState({ page: newPage });
  };

  const array = Array.from({ length: Math.min(totalPages, showPage) });

  return (
    <Pagination className={classname}>
      <PaginationContent>
        {/* Botón anterior con renderizado condicional */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {/* Números de páginas, solo muestra las primeras 3 páginas */}
        {array.map((_, i) => {
          const pageNumber = i + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Botón siguiente con renderizado condicional */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
