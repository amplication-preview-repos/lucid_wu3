import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: "Option1";
  buyer?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  updatedBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
  createdBy?: StringNullableFilter;
};
