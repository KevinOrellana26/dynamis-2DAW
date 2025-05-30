import {
  deleteProfile,
  updateAvatarProfile,
  updatePasswordProfile,
  updateProfile,
} from "./profile.db";
import {
  EditProfileUserT,
  UpdatePasswordProfileUserT,
} from "./profile.definitions";

export const updateProfileUseCase = async (
  props: EditProfileUserT & { userId: string }
) => {
  const message = await updateProfile(props);
  return message;
};

export const updatePasswordProfileUseCase = async (
  props: UpdatePasswordProfileUserT & { userId: string }
) => {
  const message = await updatePasswordProfile(props);
  return message;
};

export const deleteProfileUseCase = async (userId: string) => {
  const message = await deleteProfile({ userId });
  return message;
};

export async function updateAvatarProfileUseCase({
  userId,
  avatar,
}: {
  userId: string;
  avatar: string;
}) {
  const response = updateAvatarProfile({ userId, avatar });
  return response;
}
