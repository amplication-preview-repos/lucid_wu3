import { SentNotificationWhereInput } from "./SentNotificationWhereInput";
import { SentNotificationOrderByInput } from "./SentNotificationOrderByInput";

export type SentNotificationFindManyArgs = {
  where?: SentNotificationWhereInput;
  orderBy?: Array<SentNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
