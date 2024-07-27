import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OfferWhereInput = {
  id?: StringFilter;
  offerAmount?: FloatNullableFilter;
  status?: "Option1";
  buyer?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  createdBy?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
};
