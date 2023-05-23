import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../models/app.state";
import { TopArtistState } from "../../models/top-artists.state";

export const selectTopArtistState = createFeatureSelector<AppState, TopArtistState>("topArtists");

export const selectShortTermTopArtists = createSelector(selectTopArtistState, (state) => state?.shortTermTopArtists);

export const selectMediumTermTopArtists = createSelector(selectTopArtistState, (state) => state?.mediumTermTopArtists);

export const selectLongTermTopArtists = createSelector(selectTopArtistState, (state) => state?.longTermTopArtists);

export const selectShortTermTopArtistsAreLoading = createSelector(
  selectTopArtistState,
  (state) => state.shortTermTopArtistsAreLoading
);

export const selectShortTermTopArtistsAreLoaded = createSelector(
  selectTopArtistState,
  (state) => state.shortTermTopArtistsAreLoaded
);

export const selectMediumTermTopArtistsAreLoading = createSelector(
  selectTopArtistState,
  (state) => state.mediumTermTopTopArtistsAreLoading
);

export const selectMediumTermTopArtistsAreLoaded = createSelector(
  selectTopArtistState,
  (state) => state.mediumTermTopTopArtistsAreLoaded
);

export const selectLongTermTopArtistsAreLoading = createSelector(
  selectTopArtistState,
  (state) => state.longTermTopArtistsAreLoading
);

export const selectLongTermTopArtistsAreLoaded = createSelector(
  selectTopArtistState,
  (state) => state.longTermTopArtistsAreLoaded
);
