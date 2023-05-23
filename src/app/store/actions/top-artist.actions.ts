import { createAction, props } from "@ngrx/store";
import { Artist } from "../../models/artist.model";

export const loadShortTermTopArtists = createAction("short-term/top-artists/load/request");

export const loadMediumTermTopArtists = createAction("medium-term/top-artists/load/request");

export const loadLongTermTopArtists = createAction("long-term/top-artists/load/request");

export const loadShortTermTopArtistsSuccess = createAction(
  "short-term/top-artists/load/success",
  props<{ topArtists: Artist[] }>()
);

export const loadMediumTermTopArtistsSuccess = createAction(
  "medium-term/top-artists/load/success",
  props<{ topArtists: Artist[] }>()
);

export const loadLongTermTopArtistsSuccess = createAction(
  "long-term/top-artists/load/success",
  props<{ topArtists: Artist[] }>()
);

export const loadShortTermTopArtistFail = createAction("short-term/top-artists/load/fail", props<{ error: string }>());
export const loadMediumTermTopArtistFail = createAction(
  "medium-term/top-artists/load/fail",
  props<{ error: string }>()
);
export const loadLongTermTopArtistFail = createAction("long-term/top-artists/load/fail", props<{ error: string }>());
