import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BrandWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  name?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
};
