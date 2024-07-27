import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FollowWhereInput = {
  id?: StringFilter;
  followed?: StringNullableFilter;
  follower?: StringNullableFilter;
};
