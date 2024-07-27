import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="buyer" source="buyer" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="updatedBy" source="updatedBy" />
        <TextInput label="deletedBy" source="deletedBy" />
        <TextInput label="createdBy" source="createdBy" />
      </SimpleForm>
    </Edit>
  );
};
