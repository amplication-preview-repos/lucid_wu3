import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VariationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Variations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="size" source="size" />
        <TextField label="color" source="color" />
        <TextField label="key" source="key" />
        <TextField label="value" source="value" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="deletedBy" source="deletedBy" />
        <TextField label="updatedBy" source="updatedBy" />
      </Datagrid>
    </List>
  );
};
