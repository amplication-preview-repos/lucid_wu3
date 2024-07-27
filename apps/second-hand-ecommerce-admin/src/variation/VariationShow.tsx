import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VariationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
