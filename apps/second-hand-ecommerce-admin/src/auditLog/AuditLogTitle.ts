import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "entityName";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.entityName?.toString() || String(record.id);
};
