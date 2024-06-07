import { ExpenseUpdateManyWithoutTripsInput } from "./ExpenseUpdateManyWithoutTripsInput";
import { UserUpdateManyWithoutTripsInput } from "./UserUpdateManyWithoutTripsInput";

export type TripUpdateInput = {
  destination?: string | null;
  endDate?: Date | null;
  expenses?: ExpenseUpdateManyWithoutTripsInput;
  name?: string | null;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutTripsInput;
};
