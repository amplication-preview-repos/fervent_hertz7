import { User } from "../user/User";

export type Match = {
  createdAt: Date;
  id: string;
  scheduledTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
