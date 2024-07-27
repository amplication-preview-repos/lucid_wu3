import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const VariationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="size"
          label="size"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="color"
          label="color"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="key" source="key" />
        <TextInput label="value" source="value" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="deletedBy" source="deletedBy" />
        <TextInput label="updatedBy" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
