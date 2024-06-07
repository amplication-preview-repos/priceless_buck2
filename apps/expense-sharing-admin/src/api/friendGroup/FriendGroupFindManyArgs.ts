import { FriendGroupWhereInput } from "./FriendGroupWhereInput";
import { FriendGroupOrderByInput } from "./FriendGroupOrderByInput";

export type FriendGroupFindManyArgs = {
  where?: FriendGroupWhereInput;
  orderBy?: Array<FriendGroupOrderByInput>;
  skip?: number;
  take?: number;
};
