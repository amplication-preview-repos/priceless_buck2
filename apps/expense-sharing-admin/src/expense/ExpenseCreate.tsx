import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" source="description" />
        <TextInput label="payer" source="payer" />
        <ReferenceInput source="trip.id" reference="Trip" label="trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
