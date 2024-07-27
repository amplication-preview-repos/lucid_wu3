import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  followed?: SortOrder;
  follower?: SortOrder;
};
