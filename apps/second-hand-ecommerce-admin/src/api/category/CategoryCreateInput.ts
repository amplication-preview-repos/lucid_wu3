import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
};
