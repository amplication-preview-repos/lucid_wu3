import { SentNotification as TSentNotification } from "../api/sentNotification/SentNotification";

export const SENTNOTIFICATION_TITLE_FIELD = "id";

export const SentNotificationTitle = (record: TSentNotification): string => {
  return record.id?.toString() || String(record.id);
};
