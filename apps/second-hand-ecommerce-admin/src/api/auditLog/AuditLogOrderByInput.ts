import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  changedAt?: SortOrder;
  entityName?: SortOrder;
  entityId?: SortOrder;
  previousValue?: SortOrder;
  newValue?: SortOrder;
  fieldName?: SortOrder;
  changedBy?: SortOrder;
};
