"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { useQueryStates, parseAsInteger } from "nuqs";

type PaginationProps = {
  totalPages: number;
  classname?: string;
};

export default function PaginationComponent(params: PaginationProps) {
  const { totalPages, classname } = params;
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };
  //nuqs para sincronizar el estado de la paginacion con los searchParams
  const [pageState, setPageState] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1), //Página actual
    },
    options
  );

  const { page: currentPage } = pageState;

  const handlePageChange = (newPage: number) => {
    setPageState({ page: newPage }); // actualiza el estado y los searchParams
  };

  //////////////////////////////
  const getPageNumbers = () => {
    const pages = [];

    // muestra la primera página
    if (currentPage > 3) {
      pages.push(1);
      pages.push("start-ellipsis");
    }

    // muestra las páginas cercanas a la página actual
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // muestra la última página
    if (currentPage < totalPages - 2) {
      pages.push("end-ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageItems = getPageNumbers();
  //////////////////////////////////////////

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))} */}

        {pageItems.map((item, index) => {
          if (item === "start-ellipsis" || item === "end-ellipsis") {
            return (
              <PaginationItem key={item + index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={item}>
              <PaginationLink
                isActive={item === currentPage}
                onClick={() => handlePageChange(item as number)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
