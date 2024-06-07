import { ExpenseCreateNestedManyWithoutTripsInput } from "./ExpenseCreateNestedManyWithoutTripsInput";
import { UserCreateNestedManyWithoutTripsInput } from "./UserCreateNestedManyWithoutTripsInput";

export type TripCreateInput = {
  destination?: string | null;
  endDate?: Date | null;
  expenses?: ExpenseCreateNestedManyWithoutTripsInput;
  name?: string | null;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutTripsInput;
};
