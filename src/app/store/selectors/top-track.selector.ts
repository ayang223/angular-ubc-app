import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../models/app.state";
import { TopTrackState } from "../../models/top-track.state";

export const selectTopTrackState = createFeatureSelector<AppState, TopTrackState>("topTracks");

export const selectShortTermTopTracks = createSelector(selectTopTrackState, (state) => state?.shortTermTopTracks);

export const selectMediumTermTopTracks = createSelector(selectTopTrackState, (state) => state?.mediumTermTopTracks);

export const selectLongTermTopTracks = createSelector(selectTopTrackState, (state) => state?.longTermTopTracks);

export const selectShortTermTopTracksAreLoading = createSelector(
  selectTopTrackState,
  (state) => state.shortTermTopTracksAreLoading
);

export const selectShortTermTopTracksAreLoaded = createSelector(
  selectTopTrackState,
  (state) => state.shortTermTopTracksAreLoaded
);

export const selectMediumTermTopTracksAreLoading = createSelector(
  selectTopTrackState,
  (state) => state.mediumTermTopTopTracksAreLoading
);

export const selectMediumTermTopTracksAreLoaded = createSelector(
  selectTopTrackState,
  (state) => state.mediumTermTopTopTracksAreLoaded
);

export const selectLongTermTopTracksAreLoading = createSelector(
  selectTopTrackState,
  (state) => state.longTermTopTracksAreLoading
);

export const selectLongTermTopTracksAreLoaded = createSelector(
  selectTopTrackState,
  (state) => state.longTermTopTracksAreLoaded
);
