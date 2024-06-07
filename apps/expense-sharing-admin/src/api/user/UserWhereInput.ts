import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FriendGroupWhereUniqueInput } from "../friendGroup/FriendGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  friendGroup?: FriendGroupWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  trip?: TripWhereUniqueInput;
  username?: StringFilter;
};
