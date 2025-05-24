import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type UserAvatarT = {
  userId: string;
  avatar: string;
  name: string;
  className?: string;
};

export default function UserAvatar({
  userId,
  avatar,
  name,
  className,
}: UserAvatarT) {
  // const getInitial = () => {
  //   if (!name) return "US"; //->  valor por defecto si no hay nombre
  //   return name
  //     .split(" ")
  //     .map((part) => part[0])
  //     .join("")
  //     .toUpperCase();
  // };

  return (
    // <Avatar className={className}>
    //   {avatar ? <AvatarImage src={avatar} alt={`Avatar de ${name}`} /> : null}
    //   <AvatarFallback>
    //     {/* Si no hay avatar muestra las iniciales del nombre */}
    //     {/* {avatar ? "K" : ""} */}
    //     {getInitial()}
    //   </AvatarFallback>
    // </Avatar>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="relative size-8 rounded-full">
          <Avatar className={className}>
            {avatar ? (
              <AvatarImage src={avatar} alt={`Avatar de ${name}`} />
            ) : null}
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href={`/profile/${userId}`} className="cursor-pointer">Ver Perfil</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
