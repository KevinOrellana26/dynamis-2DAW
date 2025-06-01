import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserTableT } from "../_core/users.definitions";
import { Button } from "@/components/ui/button";
import EditUserDialog from "./EditUserDialog";
import RemoveUserDialog from "./RemoveUserDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserListTableProps = {
  users: UserTableT[];
  totalUsers: number;
};

export default function UserListTable(params: UserListTableProps) {
  const { users, totalUsers } = params;
  return (
    <Table>
      <TableCaption>Lista de usuarios</TableCaption>
      <TableHeader>
        <TableRow className="text-center">
          <TableCell>ID</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Fecha Creación</TableCell>
          <TableCell>Rol</TableCell>
          <TableCell>Verificado</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user.id} className="text-center">
            <TableCell>{index}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage src={user.avatar ?? "/default-avatar.png"} />
                  <AvatarFallback className="text-sm">
                    {user.name.charAt(0).toLocaleUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
            <TableCell>
              {user.role === "ADMIN" ? "Administrador" : "Usuario"}
            </TableCell>
            <TableCell>{user.isEmailVerified ? "Si" : "No"}</TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 items-center justify-center">
                <EditUserDialog user={user} />
                <RemoveUserDialog userId={user.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>Total usuarios</TableCell>
          <TableCell className="text-right">{totalUsers}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
