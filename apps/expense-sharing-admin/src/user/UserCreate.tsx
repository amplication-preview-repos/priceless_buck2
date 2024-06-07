import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { FriendGroupTitle } from "../friendGroup/FriendGroupTitle";
import { TripTitle } from "../trip/TripTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="friendGroup.id"
          reference="FriendGroup"
          label="FriendGroup"
        >
          <SelectInput optionText={FriendGroupTitle} />
        </ReferenceInput>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="name" source="name" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="trip.id" reference="Trip" label="Trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
