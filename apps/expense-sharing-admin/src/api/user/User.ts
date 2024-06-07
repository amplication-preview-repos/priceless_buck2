import { FriendGroup } from "../friendGroup/FriendGroup";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  friendGroup?: FriendGroup | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  trip?: Trip | null;
  updatedAt: Date;
  username: string;
};
