import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: "Option1";
  seller?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  buyer?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
  createdBy?: StringNullableFilter;
};
