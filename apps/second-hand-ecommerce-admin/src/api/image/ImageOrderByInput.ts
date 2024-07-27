import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  productId?: SortOrder;
  deletedBy?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
};
