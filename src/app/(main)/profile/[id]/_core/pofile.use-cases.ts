import { deleteProfile, updateProfile } from "./profile.db";
import { EditProfileT } from "./profile.definitions";

export const updateProfileUseCase = async (
  props: EditProfileT & { userId: string }
) => {
  const message = await updateProfile(props);
  return message;
};

export const deleteProfileUseCase = async (userId: string) => {
  const message = await deleteProfile({ userId });
  return message;
};
