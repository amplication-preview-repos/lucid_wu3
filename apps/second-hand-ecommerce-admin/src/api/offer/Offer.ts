import { Product } from "../product/Product";

export type Offer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  offerAmount: number | null;
  status?: "Option1" | null;
  buyer: string | null;
  product?: Product | null;
  createdBy: string | null;
  updatedBy: string | null;
  deletedBy: string | null;
};
