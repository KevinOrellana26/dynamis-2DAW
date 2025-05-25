import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { handleAsync } from "@/app/_shared/errors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import ErrorMessage from "../../_components/ErrorMessage";
import DeleteProfileDialog from "./_components/DeleteProfileDialog";
import EditPasswordProfileDialog from "./_components/EditPasswordProfileDialog";
import EditProfileDialog from "./_components/EditProfileDialog";
import { getUserProfile } from "./_core/profile.db";

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
    <div className="min-h-screen flex items-center justify-center mx-3">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="flex flex-col items-center gap-3 mt-5 border-b md:gap-8 md:items-start md:flex-row">
          <Avatar className="size-28">
            <AvatarImage src={userDetails.avatar || undefined} />
            <AvatarFallback className="text-3xl">
              {serializedUser.name.charAt(0).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left space-y-2 mt-4 md:mt-0">
            <div className="flex justify-between">
              <CardTitle className="text-3xl font-extrabold">
                {serializedUser.name}
              </CardTitle>
              {isCurrentUser && <DeleteProfileDialog userId={userId} />}
            </div>
            <CardDescription className="text-lg">
              {serializedUser.email}
            </CardDescription>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
              {serializedUser.isEmailVerified && (
                <Badge variant={"outline"}>Email verificado</Badge>
              )}
              <Badge
                variant={
                  serializedUser.role === "ADMIN" ? "default" : "outline"
                }
              >
                {serializedUser.role === "ADMIN" ? "Administrador" : "Usuario"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Miembro desde el: {formatDate(serializedUser.createdAt)}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 justify-center md:justify-end">
            <EditProfileDialog user={serializedUser} />
            <EditPasswordProfileDialog />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
