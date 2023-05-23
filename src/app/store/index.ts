import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../models/app.state";
import { recentlyPlayedReducer } from "./reducers/recently-played.reducer";
import { topArtistReducer } from "./reducers/top-artist.reducer";
import { topTrackReducer } from "./reducers/top-track.reducer";

export const reducers: ActionReducerMap<AppState> = {
  topTracks: topTrackReducer,
  topArtists: topArtistReducer,
  recentlyPlayed: recentlyPlayedReducer,
};
