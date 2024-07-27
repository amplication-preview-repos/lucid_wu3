import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  createdBy?: SortOrder;
  updatedBy?: SortOrder;
  deletedBy?: SortOrder;
  pushNotifications?: SortOrder;
  emailNotifications?: SortOrder;
  profileImage?: SortOrder;
  emailVerified?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  zipCode?: SortOrder;
  accountNumber?: SortOrder;
  street?: SortOrder;
  country?: SortOrder;
  bankName?: SortOrder;
  routingNumber?: SortOrder;
  accountType?: SortOrder;
};
