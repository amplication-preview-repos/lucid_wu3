import { Variation as TVariation } from "../api/variation/Variation";

export const VARIATION_TITLE_FIELD = "key";

export const VariationTitle = (record: TVariation): string => {
  return record.key?.toString() || String(record.id);
};
