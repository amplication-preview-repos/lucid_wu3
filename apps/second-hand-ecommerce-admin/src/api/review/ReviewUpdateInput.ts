import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
