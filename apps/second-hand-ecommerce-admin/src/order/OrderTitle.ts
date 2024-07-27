import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "seller";

export const OrderTitle = (record: TOrder): string => {
  return record.seller?.toString() || String(record.id);
};
