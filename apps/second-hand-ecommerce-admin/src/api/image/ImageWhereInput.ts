import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  deletedBy?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
};
