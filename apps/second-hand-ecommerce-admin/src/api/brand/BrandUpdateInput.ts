import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  products?: ProductUpdateManyWithoutBrandsInput;
  name?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
};
