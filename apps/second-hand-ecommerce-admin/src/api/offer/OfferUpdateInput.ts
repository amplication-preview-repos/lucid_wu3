import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OfferUpdateInput = {
  offerAmount?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  product?: ProductWhereUniqueInput | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
};
