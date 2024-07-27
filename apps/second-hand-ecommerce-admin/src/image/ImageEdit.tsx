import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="deletedBy" source="deletedBy" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="updatedBy" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
