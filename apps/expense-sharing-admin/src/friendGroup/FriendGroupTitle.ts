import { FriendGroup as TFriendGroup } from "../api/friendGroup/FriendGroup";

export const FRIENDGROUP_TITLE_FIELD = "name";

export const FriendGroupTitle = (record: TFriendGroup): string => {
  return record.name?.toString() || String(record.id);
};
