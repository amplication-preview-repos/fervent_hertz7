import { AvailabilityUpdateManyWithoutUsersInput } from "./AvailabilityUpdateManyWithoutUsersInput";
import { MatchUpdateManyWithoutUsersInput } from "./MatchUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  availabilities?: AvailabilityUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  matches?: MatchUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
