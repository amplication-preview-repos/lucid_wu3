import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageCreateNestedManyWithoutProductsInput } from "./ImageCreateNestedManyWithoutProductsInput";
import { TransactionCreateNestedManyWithoutProductsInput } from "./TransactionCreateNestedManyWithoutProductsInput";
import { OfferCreateNestedManyWithoutProductsInput } from "./OfferCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  title?: string | null;
  price?: number | null;
  description?: string | null;
  brand?: BrandWhereUniqueInput | null;
  seller?: string | null;
  category?: CategoryWhereUniqueInput | null;
  images?: ImageCreateNestedManyWithoutProductsInput;
  transactions?: TransactionCreateNestedManyWithoutProductsInput;
  offers?: OfferCreateNestedManyWithoutProductsInput;
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
