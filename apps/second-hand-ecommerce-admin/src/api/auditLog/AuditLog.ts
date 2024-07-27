import { JsonValue } from "type-fest";

export type AuditLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  changedAt: Date | null;
  entityName: string | null;
  entityId: string | null;
  previousValue: JsonValue;
  newValue: JsonValue;
  fieldName: string | null;
  changedBy: string | null;
};
