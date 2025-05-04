import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarT = {
  avatar: string;
  name: string;
  className?: string;
};

export default function UserAvatar({ avatar, name, className }: UserAvatarT) {
  const getInitial = () => {
    if (!name) return "US"; //->  valor por defecto si no hay nombre
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Avatar className={className}>
      {avatar ? <AvatarImage src={avatar} alt={`Avatar de ${name}`} /> : null}
      <AvatarFallback>
        {/* Si no hay avatar muestra las iniciales del nombre */}
        {/* {avatar ? "K" : ""} */}
        {getInitial()}
      </AvatarFallback>
    </Avatar>
  );
}
