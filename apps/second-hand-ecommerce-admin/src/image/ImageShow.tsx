import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="deletedBy" source="deletedBy" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="updatedBy" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
