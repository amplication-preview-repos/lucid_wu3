import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  brandId?: SortOrder;
  seller?: SortOrder;
  categoryId?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
};
