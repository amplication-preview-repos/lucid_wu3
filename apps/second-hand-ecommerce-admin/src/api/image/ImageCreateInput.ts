import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageCreateInput = {
  url?: string | null;
  product?: ProductWhereUniqueInput | null;
  deletedBy?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
};
