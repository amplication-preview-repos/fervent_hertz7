import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  emailSent: boolean | null;
  id: string;
  responseReceived: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
