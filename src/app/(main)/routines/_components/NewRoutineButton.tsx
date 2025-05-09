import React from "react";
import { Button } from "../../../../components/ui/button";
import { Plus } from "@/config/theme.config";

function NewRoutineButton() {
  return (
    <Button
      variant={"dynamis"}
      // onClick={handleLogoutButton}
      // isPending={isPending}
    >
      {/* {isPending ? "Cerrando sesión" : "Cerrar sesión"} */}
      <Plus className="text-white" />
      Crear rutina
    </Button>
  );
}

export default NewRoutineButton;
