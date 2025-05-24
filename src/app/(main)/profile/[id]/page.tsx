import { handleAsync } from "@/app/_shared/errors";
import { getUserProfile } from "./_core/profile.db";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import ErrorMessage from "../../_components/ErrorMessage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import EditProfileDialog from "./_components/EditProfileDialog";
import DeleteProfileDialog from "./_components/DeleteProfileDialog";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProfilePage({ params }: Props) {
  const userId = params.id;
  const [userDetails, userError] = await handleAsync(() =>
    getUserProfile({ userId })
  );

  //hacer una comprobación explicita de que el que quiere acceder es ese usuario.
  const session = await getSession();
  const isCurrentUser = session?.userId === userId;

  if (userError) {
    return <ErrorMessage message={userError.message} path="/" />;
  }

  if (!userDetails) {
    return <ErrorMessage message="Usuario no encontrado." path="/" />;
  }

  // Prepara los datos para pasarlos a client components
  const serializedUser = {
    ...userDetails,
    createdAt: userDetails.createdAt.toISOString(), // Serializa Date a string
    updatedAt: userDetails.updatedAt.toISOString(), // Serializa Date a string
  };

  return (
    <div className="container mx-auto mt-6 py-8 px-4 bg-amber-500">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <Avatar>
            <AvatarImage src={userDetails.avatar || undefined} />
            <AvatarFallback>
              {serializedUser.name.charAt(0).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{serializedUser.name}</h1>
            <p className="text-muted-foreground">{serializedUser.email}</p>

            {serializedUser.isEmailVerified && (
              <Badge variant={"outline"} className="mt-2">
                Email verificado
              </Badge>
            )}

            <Badge
              variant={serializedUser.role === "ADMIN" ? "default" : "outline"}
              className="mt-2 ml-2"
            >
              {serializedUser.role === "ADMIN" ? "Administrador" : "Usuario"}
            </Badge>

            <p className="text-sm text-muted-foreground">
              {" "}
              Miembro desde el: {formatDate(serializedUser.createdAt)}
            </p>

            <EditProfileDialog user={serializedUser} />
            {isCurrentUser && <DeleteProfileDialog userId={userId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
