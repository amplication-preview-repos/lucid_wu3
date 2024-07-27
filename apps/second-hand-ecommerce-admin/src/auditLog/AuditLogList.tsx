import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AuditLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="changedAt" source="changedAt" />
        <TextField label="entityName" source="entityName" />
        <TextField label="entityId" source="entityId" />
        <TextField label="previousValue" source="previousValue" />
        <TextField label="newValue" source="newValue" />
        <TextField label="fieldName" source="fieldName" />
        <TextField label="changedBy" source="changedBy" />
      </Datagrid>
    </List>
  );
};
