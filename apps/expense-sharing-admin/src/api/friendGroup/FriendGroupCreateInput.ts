import { UserCreateNestedManyWithoutFriendGroupsInput } from "./UserCreateNestedManyWithoutFriendGroupsInput";

export type FriendGroupCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutFriendGroupsInput;
};
