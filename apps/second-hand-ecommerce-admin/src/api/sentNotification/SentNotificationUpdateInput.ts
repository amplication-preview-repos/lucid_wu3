import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SentNotificationUpdateInput = {
  typeField?: "Option1" | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
