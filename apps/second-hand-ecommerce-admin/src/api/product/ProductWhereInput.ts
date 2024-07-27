import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { OfferListRelationFilter } from "../offer/OfferListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  brand?: BrandWhereUniqueInput;
  seller?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  images?: ImageListRelationFilter;
  transactions?: TransactionListRelationFilter;
  offers?: OfferListRelationFilter;
  createdBy?: StringNullableFilter;
  updatedBy?: StringNullableFilter;
  deletedBy?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
