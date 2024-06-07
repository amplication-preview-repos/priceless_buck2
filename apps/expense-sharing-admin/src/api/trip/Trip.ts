import { Expense } from "../expense/Expense";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  destination: string | null;
  endDate: Date | null;
  expenses?: Array<Expense>;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
  users?: Array<User>;
};
