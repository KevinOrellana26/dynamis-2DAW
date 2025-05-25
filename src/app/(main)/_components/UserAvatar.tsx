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

  return (
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
      <DropdownMenuContent className="w-56" align="end" forceMount side="top">
        <DropdownMenuItem asChild>
          <Link href={`/profile/${userId}`} className="cursor-pointer">Ver Perfil</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
