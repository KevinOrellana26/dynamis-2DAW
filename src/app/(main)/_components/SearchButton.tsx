import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function SearchButton() {
  return (
    <>
      <Button type="submit" variant={"dynamis"} className="cursor-pointer">
        <Search className="mr-2 h-4 w-4" />
        Buscar
      </Button>
    </>
  );
}

export default SearchButton;
