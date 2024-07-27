import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="changedAt" source="changedAt" />
        <TextInput label="entityName" source="entityName" />
        <TextInput label="entityId" source="entityId" />
        <div />
        <div />
        <TextInput label="fieldName" source="fieldName" />
        <TextInput label="changedBy" source="changedBy" />
      </SimpleForm>
    </Create>
  );
};
