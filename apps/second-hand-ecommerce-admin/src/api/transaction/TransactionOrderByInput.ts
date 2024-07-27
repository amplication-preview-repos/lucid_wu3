import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  buyer?: SortOrder;
  productId?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
  createdBy?: SortOrder;
};
