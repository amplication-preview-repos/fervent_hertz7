import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchCreateInput = {
  scheduledTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
