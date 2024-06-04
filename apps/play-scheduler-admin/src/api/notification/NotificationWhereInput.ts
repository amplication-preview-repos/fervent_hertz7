import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  emailSent?: BooleanNullableFilter;
  id?: StringFilter;
  responseReceived?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
