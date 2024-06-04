import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityCreateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
