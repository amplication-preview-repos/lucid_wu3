import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SentNotificationWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
