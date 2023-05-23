import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../models/app.state";
import { RecentlyPlayedState } from "../../models/recently-played.state";

export const selectRecentlyPlayedState = createFeatureSelector<AppState, RecentlyPlayedState>("recentlyPlayed");

export const selectRecentlyPlayed = createSelector(selectRecentlyPlayedState, (state) => state?.recentlyPlayed);

export const selectRecentlyPlayedAreLoading = createSelector(
  selectRecentlyPlayedState,
  (state) => state.recentlyPlayedAreLoading
);

export const selectRecentlyPlayedAreLoaded = createSelector(
  selectRecentlyPlayedState,
  (state) => state.recentlyPlayedAreLoaded
);
