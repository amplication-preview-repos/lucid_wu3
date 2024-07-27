import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
