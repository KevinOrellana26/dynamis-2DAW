import { addUser, deleteUser, editUser, getTotalUsers, getUsersList } from "./users.db";
import { AddUserFormT, DeleteUserT, EditUserFormT } from "./users.definitions";

export const getUsersListUseCase = async () => {
  const totalUsers = await getTotalUsers();
  console.log("total user: ", totalUsers);
  const usersList = await getUsersList();
  return { totalUsers, usersList };
};

export const addUserUseCase = async (params: AddUserFormT) => {
  const response = await addUser(params);
  return response;
};

export const editUserUseCase = async (params: EditUserFormT) => {
  const response = await editUser(params);
  return response;
};

export const deleteUserUseCase = async (params: DeleteUserT) => {
  const response = await deleteUser(params);
  return response;
};
