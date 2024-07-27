import { Product } from "../product/Product";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  product?: Product | null;
  deletedBy: string | null;
  createdBy: string | null;
  updatedBy: string | null;
};
