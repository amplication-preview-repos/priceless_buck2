import { Trip } from "../trip/Trip";

export type Expense = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  payer: string | null;
  trip?: Trip | null;
  updatedAt: Date;
};
