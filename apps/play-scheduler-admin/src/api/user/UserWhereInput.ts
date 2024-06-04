import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  availabilities?: AvailabilityListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  matches?: MatchListRelationFilter;
  notifications?: NotificationListRelationFilter;
  username?: StringFilter;
};
