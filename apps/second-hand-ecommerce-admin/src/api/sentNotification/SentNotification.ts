import { User } from "../user/User";

export type SentNotification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  message: string | null;
  user?: User | null;
};
