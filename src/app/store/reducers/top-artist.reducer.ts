import { Action, createReducer, on } from "@ngrx/store";
import { TopArtistState } from "../../models/top-artists.state";
import {
  loadLongTermTopArtistFail,
  loadLongTermTopArtists,
  loadLongTermTopArtistsSuccess,
  loadMediumTermTopArtistFail,
  loadMediumTermTopArtists,
  loadMediumTermTopArtistsSuccess,
  loadShortTermTopArtistFail,
  loadShortTermTopArtists,
  loadShortTermTopArtistsSuccess,
} from "../actions/top-artist.actions";

const initialState: TopArtistState = {
  shortTermTopArtists: [],
  mediumTermTopArtists: [],
  longTermTopArtists: [],
  shortTermTopArtistsAreLoaded: false,
  shortTermTopArtistsAreLoading: false,
  mediumTermTopTopArtistsAreLoaded: false,
  mediumTermTopTopArtistsAreLoading: false,
  longTermTopArtistsAreLoaded: false,
  longTermTopArtistsAreLoading: false,
  shortTermTopArtistsError: "",
  mediumTermTopArtistsError: "",
  longTermTopArtistsError: "",
};

const reducer = createReducer<TopArtistState>(
  initialState,
  on(loadShortTermTopArtists, (state) => ({ ...state, shortTermTopArtistsAreLoading: true })),
  on(loadMediumTermTopArtists, (state) => ({ ...state, mediumTermTopTopArtistsAreLoading: true })),
  on(loadLongTermTopArtists, (state) => ({ ...state, longTermTopArtistsAreLoading: true })),
  on(loadShortTermTopArtistsSuccess, (state, { topArtists }) => {
    return {
      ...state,
      shortTermTopArtists: topArtists,
      shortTermTopArtistsAreLoaded: true,
      shortTermTopArtistsAreLoading: false,
    };
  }),
  on(loadMediumTermTopArtistsSuccess, (state, { topArtists }) => {
    return {
      ...state,
      mediumTermTopArtists: topArtists,
      mediumTermTopTopArtistsAreLoaded: true,
      mediumTermTopTopArtistsAreLoading: false,
    };
  }),
  on(loadLongTermTopArtistsSuccess, (state, { topArtists }) => {
    return {
      ...state,
      longTermTopArtists: topArtists,
      longTermTopArtistsAreLoaded: true,
      longTermTopArtistsAreLoading: false,
    };
  }),
  on(loadShortTermTopArtistFail, (state, { error }) => ({
    ...state,
    shortTermTopArtistsError: error,
    shortTermTopArtistsAreLoaded: true,
    shortTermTopArtistsAreLoading: false,
  })),
  on(loadMediumTermTopArtistFail, (state, { error }) => ({
    ...state,
    mediumTermTopArtistsError: error,
    mediumTermTopArtistsAreLoaded: true,
    mediumTermTopArtistsAreLoading: false,
  })),
  on(loadLongTermTopArtistFail, (state, { error }) => ({
    ...state,
    longTermTopArtistsError: error,
    longTermTopArtistsAreLoaded: true,
    longTermTopArtistsAreLoading: false,
  }))
);

export function topArtistReducer(state: TopArtistState | undefined, action: Action): TopArtistState {
  return reducer(state, action);
}
