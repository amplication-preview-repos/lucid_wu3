import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
