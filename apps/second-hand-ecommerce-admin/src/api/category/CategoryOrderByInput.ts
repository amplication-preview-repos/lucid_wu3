import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
};
