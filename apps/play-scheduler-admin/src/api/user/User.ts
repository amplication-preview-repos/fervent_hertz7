import { Availability } from "../availability/Availability";
import { Match } from "../match/Match";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  availabilities?: Array<Availability>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  matches?: Array<Match>;
  notifications?: Array<Notification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
