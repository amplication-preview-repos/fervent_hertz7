import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  scheduledTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
