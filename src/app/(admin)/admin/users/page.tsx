import { Metadata } from "next";
import UserListTable from "./_components/UserListTable";
import { UserTableT } from "./_core/users.definitions";
import { handleAsync } from "@/app/_shared/errors";
import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import { getUsersListUseCase } from "./_core/users.use-cases";
import AddUserDialog from "./_components/AddUserDialog";

export const metadata: Metadata = {
  title: "Admin Usuarios",
};

export default async function UserPage() {
  const [users, error] = await handleAsync(() => getUsersListUseCase());

  if (error || !users) {
    return (
      <ErrorMessage
        message={error?.message || "Error al obtener usuarios."}
        path="/admin/dashboard"
      />
    );
  }

  const { usersList, totalUsers } = users;

  return (
    <div className="mx-10 my-5">
      <div className="flex justify-end mb-6">
        <AddUserDialog />
      </div>
      <UserListTable users={usersList} totalUsers={totalUsers} />
    </div>
  );
}
