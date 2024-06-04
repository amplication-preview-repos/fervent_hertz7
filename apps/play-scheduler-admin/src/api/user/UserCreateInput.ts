import { AvailabilityCreateNestedManyWithoutUsersInput } from "./AvailabilityCreateNestedManyWithoutUsersInput";
import { MatchCreateNestedManyWithoutUsersInput } from "./MatchCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  availabilities?: AvailabilityCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  matches?: MatchCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
