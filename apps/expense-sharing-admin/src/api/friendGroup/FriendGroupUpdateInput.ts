import { UserUpdateManyWithoutFriendGroupsInput } from "./UserUpdateManyWithoutFriendGroupsInput";

export type FriendGroupUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutFriendGroupsInput;
};
