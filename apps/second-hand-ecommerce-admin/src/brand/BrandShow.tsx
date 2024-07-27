import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRAND_TITLE_FIELD } from "./BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const BrandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="updatedBy" source="updatedBy" />
        <TextField label="deletedBy" source="deletedBy" />
        <ReferenceManyField
          reference="Product"
          target="brandId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="price" source="price" />
            <TextField label="description" source="description" />
            <ReferenceField label="brand" source="brand.id" reference="Brand">
              <TextField source={BRAND_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="seller" source="seller" />
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="createdBy" source="createdBy" />
            <TextField label="updatedBy" source="updatedBy" />
            <TextField label="deletedBy" source="deletedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
