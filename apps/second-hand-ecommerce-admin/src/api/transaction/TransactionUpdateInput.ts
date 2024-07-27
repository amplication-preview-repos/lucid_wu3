import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  product?: ProductWhereUniqueInput | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
  createdBy?: string | null;
};
