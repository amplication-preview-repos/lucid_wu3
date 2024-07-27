import { SortOrder } from "../../util/SortOrder";

export type VariationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  size?: SortOrder;
  color?: SortOrder;
  key?: SortOrder;
  value?: SortOrder;
  createdBy?: SortOrder;
  deletedBy?: SortOrder;
  updatedBy?: SortOrder;
};
