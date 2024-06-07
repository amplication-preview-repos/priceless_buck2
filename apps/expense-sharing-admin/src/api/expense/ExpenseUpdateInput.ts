import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  payer?: string | null;
  trip?: TripWhereUniqueInput | null;
};
