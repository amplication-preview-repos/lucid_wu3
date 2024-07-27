import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "followed";

export const FollowTitle = (record: TFollow): string => {
  return record.followed?.toString() || String(record.id);
};
