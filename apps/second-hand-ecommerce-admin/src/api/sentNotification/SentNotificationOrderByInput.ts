import { SortOrder } from "../../util/SortOrder";

export type SentNotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  message?: SortOrder;
  userId?: SortOrder;
};
