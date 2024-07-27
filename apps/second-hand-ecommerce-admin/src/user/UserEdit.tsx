import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectInput,
} from "react-admin";

import { SentNotificationTitle } from "../sentNotification/SentNotificationTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="updatedBy" source="updatedBy" />
        <TextInput label="deletedBy" source="deletedBy" />
        <BooleanInput label="pushNotifications" source="pushNotifications" />
        <BooleanInput label="emailNotifications" source="emailNotifications" />
        <TextInput label="profileImage" source="profileImage" />
        <BooleanInput label="emailVerified" source="emailVerified" />
        <ReferenceArrayInput
          source="sentNotifications"
          reference="SentNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SentNotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="city" source="city" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
        <TextInput label="accountNumber" source="accountNumber" />
        <TextInput label="street" source="street" />
        <TextInput label="country" source="country" />
        <TextInput label="bankName" source="bankName" />
        <TextInput label="routingNumber" source="routingNumber" />
        <SelectInput
          source="accountType"
          label="accountType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
