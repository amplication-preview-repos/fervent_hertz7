import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
