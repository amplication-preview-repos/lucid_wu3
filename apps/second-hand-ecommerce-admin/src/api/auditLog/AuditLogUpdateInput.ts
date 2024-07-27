import { InputJsonValue } from "../../types";

export type AuditLogUpdateInput = {
  changedAt?: Date | null;
  entityName?: string | null;
  entityId?: string | null;
  previousValue?: InputJsonValue;
  newValue?: InputJsonValue;
  fieldName?: string | null;
  changedBy?: string | null;
};
