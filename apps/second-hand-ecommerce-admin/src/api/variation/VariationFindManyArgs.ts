import { VariationWhereInput } from "./VariationWhereInput";
import { VariationOrderByInput } from "./VariationOrderByInput";

export type VariationFindManyArgs = {
  where?: VariationWhereInput;
  orderBy?: Array<VariationOrderByInput>;
  skip?: number;
  take?: number;
};
