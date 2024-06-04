import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchUpdateInput = {
  scheduledTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
