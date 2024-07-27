import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  offerAmount?: SortOrder;
  status?: SortOrder;
  buyer?: SortOrder;
  productId?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
};
