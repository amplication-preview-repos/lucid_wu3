import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VariationWhereInput = {
  id?: StringFilter;
  size?: "Option1";
  color?: "Option1";
  key?: StringNullableFilter;
  value?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
};
