import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  seller?: SortOrder;
  productId?: SortOrder;
  buyer?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
  createdBy?: SortOrder;
};
