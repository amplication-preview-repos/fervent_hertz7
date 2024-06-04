import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  emailSent?: SortOrder;
  id?: SortOrder;
  responseReceived?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
