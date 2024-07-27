import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="changedAt" source="changedAt" />
        <TextInput label="entityName" source="entityName" />
        <TextInput label="entityId" source="entityId" />
        <div />
        <div />
        <TextInput label="fieldName" source="fieldName" />
        <TextInput label="changedBy" source="changedBy" />
      </SimpleForm>
    </Edit>
  );
};
