import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  friendGroupId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  tripId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
