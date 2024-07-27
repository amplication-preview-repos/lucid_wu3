import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageUpdateManyWithoutProductsInput } from "./ImageUpdateManyWithoutProductsInput";
import { TransactionUpdateManyWithoutProductsInput } from "./TransactionUpdateManyWithoutProductsInput";
import { OfferUpdateManyWithoutProductsInput } from "./OfferUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  title?: string | null;
  price?: number | null;
  description?: string | null;
  brand?: BrandWhereUniqueInput | null;
  seller?: string | null;
  category?: CategoryWhereUniqueInput | null;
  images?: ImageUpdateManyWithoutProductsInput;
  transactions?: TransactionUpdateManyWithoutProductsInput;
  offers?: OfferUpdateManyWithoutProductsInput;
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
