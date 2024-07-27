import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SentNotificationCreateInput = {
  typeField?: "Option1" | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
