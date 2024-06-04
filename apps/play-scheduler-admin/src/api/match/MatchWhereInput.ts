import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  scheduledTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
