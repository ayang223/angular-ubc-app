import { createAction, props } from "@ngrx/store";
import { RecentlyPlayed } from "../../models/recently-played.model";

export const loadRecentlyPlayed = createAction("recently-played/load/request");

export const loadRecentlyPlayedSuccess = createAction(
  "recently-played/load/success",
  props<{ recentlyPlayed: RecentlyPlayed[] }>()
);

export const loadRecentlyPlayedFail = createAction("short-term/top-tracks/load/fail", props<{ error: string }>());
