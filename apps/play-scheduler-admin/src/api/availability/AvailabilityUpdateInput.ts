import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityUpdateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
