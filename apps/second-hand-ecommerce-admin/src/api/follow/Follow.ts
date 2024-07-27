export type Follow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  followed: string | null;
  follower: string | null;
};
