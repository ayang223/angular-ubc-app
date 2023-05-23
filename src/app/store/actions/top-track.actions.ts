import { createAction, props } from "@ngrx/store";
import { Track } from "../../models/track.model";

export const loadShortTermTopTracks = createAction("short-term/top-tracks/load/request");

export const loadMediumTermTopTracks = createAction("medium-term/top-tracks/load/request");

export const loadLongTermTopTracks = createAction("long-term/top-tracks/load/request");

export const loadShortTermTopTracksSuccess = createAction(
  "short-term/top-tracks/load/success",
  props<{ topTracks: Track[] }>()
);

export const loadMediumTermTopTracksSuccess = createAction(
  "medium-term/top-tracks/load/success",
  props<{ topTracks: Track[] }>()
);

export const loadLongTermTopTracksSuccess = createAction(
  "long-term/top-tracks/load/success",
  props<{ topTracks: Track[] }>()
);

export const loadShortTermTopTrackFail = createAction("short-term/top-tracks/load/fail", props<{ error: string }>());
export const loadMediumTermTopTrackFail = createAction("medium-term/top-tracks/load/fail", props<{ error: string }>());
export const loadLongTermTopTrackFail = createAction("long-term/top-tracks/load/fail", props<{ error: string }>());
