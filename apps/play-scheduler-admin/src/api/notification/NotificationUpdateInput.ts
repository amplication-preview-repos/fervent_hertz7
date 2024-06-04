import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  emailSent?: boolean | null;
  responseReceived?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
