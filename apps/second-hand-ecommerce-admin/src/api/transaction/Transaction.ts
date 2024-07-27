import { Product } from "../product/Product";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  buyer: string | null;
  product?: Product | null;
  updatedBy: string | null;
  deletedBy: string | null;
  createdBy: string | null;
};
