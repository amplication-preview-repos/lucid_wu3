import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const BrandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="updatedBy" source="updatedBy" />
        <TextInput label="deletedBy" source="deletedBy" />
      </SimpleForm>
    </Create>
  );
};
