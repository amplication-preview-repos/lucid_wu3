import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="updatedBy" source="updatedBy" />
        <TextField label="deletedBy" source="deletedBy" />
        <BooleanField label="pushNotifications" source="pushNotifications" />
        <BooleanField label="emailNotifications" source="emailNotifications" />
        <TextField label="profileImage" source="profileImage" />
        <BooleanField label="emailVerified" source="emailVerified" />
        <TextField label="city" source="city" />
        <TextField label="state" source="state" />
        <TextField label="zipCode" source="zipCode" />
        <TextField label="accountNumber" source="accountNumber" />
        <TextField label="street" source="street" />
        <TextField label="country" source="country" />
        <TextField label="bankName" source="bankName" />
        <TextField label="routingNumber" source="routingNumber" />
        <TextField label="accountType" source="accountType" />
      </Datagrid>
    </List>
  );
};
