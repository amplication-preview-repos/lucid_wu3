import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  seller?: string | null;
  product?: ProductWhereUniqueInput | null;
  buyer?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
  createdBy?: string | null;
};
