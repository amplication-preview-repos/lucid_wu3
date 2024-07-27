import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AuditLogWhereInput = {
  id?: StringFilter;
  changedAt?: DateTimeNullableFilter;
  entityName?: StringNullableFilter;
  entityId?: StringNullableFilter;
  previousValue?: JsonFilter;
  newValue?: JsonFilter;
  fieldName?: StringNullableFilter;
  changedBy?: StringNullableFilter;
};
