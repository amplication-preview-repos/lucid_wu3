import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  comment?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
