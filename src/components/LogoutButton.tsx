import { Button } from "./ui/button";

type LogoutButtonT = {
  onClick?: () => void;
};

export default function LogoutButton({ onClick }: LogoutButtonT) {
  return (
    <form>
      <Button
        variant={"dynamis"}
        className="cursor-pointer"
        onClick={onClick}
      >
        Cerrar sesión
      </Button>
    </form>
  );
}
