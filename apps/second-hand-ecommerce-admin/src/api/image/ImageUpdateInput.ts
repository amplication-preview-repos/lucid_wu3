import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageUpdateInput = {
  url?: string | null;
  product?: ProductWhereUniqueInput | null;
  deletedBy?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
};
