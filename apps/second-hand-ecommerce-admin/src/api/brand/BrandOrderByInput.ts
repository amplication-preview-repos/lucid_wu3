import { SortOrder } from "../../util/SortOrder";

export type BrandOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
};
