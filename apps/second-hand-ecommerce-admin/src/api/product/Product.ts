import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Image } from "../image/Image";
import { Transaction } from "../transaction/Transaction";
import { Offer } from "../offer/Offer";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  price: number | null;
  description: string | null;
  brand?: Brand | null;
  seller: string | null;
  category?: Category | null;
  images?: Array<Image>;
  transactions?: Array<Transaction>;
  offers?: Array<Offer>;
  createdBy: string | null;
  updatedBy: string | null;
  deletedBy: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
};
