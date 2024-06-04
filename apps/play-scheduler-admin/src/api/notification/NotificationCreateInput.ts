import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  emailSent?: boolean | null;
  responseReceived?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
