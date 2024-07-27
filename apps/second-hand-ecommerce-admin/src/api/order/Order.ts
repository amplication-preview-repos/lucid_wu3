import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  seller: string | null;
  product?: Product | null;
  buyer: string | null;
  updatedBy: string | null;
  deletedBy: string | null;
  createdBy: string | null;
};
