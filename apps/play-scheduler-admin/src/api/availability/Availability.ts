import { User } from "../user/User";

export type Availability = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
