import { FriendGroupWhereUniqueInput } from "../friendGroup/FriendGroupWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  friendGroup?: FriendGroupWhereUniqueInput | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  trip?: TripWhereUniqueInput | null;
  username: string;
};
