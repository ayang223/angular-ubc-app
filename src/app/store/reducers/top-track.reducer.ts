import { Action, createReducer, on } from "@ngrx/store";
import { TopTrackState } from "../../models/top-track.state";
import {
  loadLongTermTopTrackFail,
  loadLongTermTopTracks,
  loadLongTermTopTracksSuccess,
  loadMediumTermTopTrackFail,
  loadMediumTermTopTracks,
  loadMediumTermTopTracksSuccess,
  loadShortTermTopTrackFail,
  loadShortTermTopTracks,
  loadShortTermTopTracksSuccess,
} from "../actions/top-track.actions";

const initialState: TopTrackState = {
  shortTermTopTracks: [],
  mediumTermTopTracks: [],
  longTermTopTracks: [],
  shortTermTopTracksAreLoaded: false,
  shortTermTopTracksAreLoading: false,
  mediumTermTopTopTracksAreLoaded: false,
  mediumTermTopTopTracksAreLoading: false,
  longTermTopTracksAreLoaded: false,
  longTermTopTracksAreLoading: false,
  shortTermTopTrackError: "",
  mediumTermTopTrackError: "",
  longTermTopTrackError: "",
};

const reducer = createReducer<TopTrackState>(
  initialState,
  on(loadShortTermTopTracks, (state) => ({ ...state, shortTermTopTracksAreLoading: true })),
  on(loadMediumTermTopTracks, (state) => ({ ...state, mediumTermTopTopTracksAreLoading: true })),
  on(loadLongTermTopTracks, (state) => ({ ...state, longTermTopTracksAreLoading: true })),
  on(loadShortTermTopTracksSuccess, (state, { topTracks }) => {
    return {
      ...state,
      shortTermTopTracks: topTracks,
      shortTermTopTracksAreLoaded: true,
      shortTermTopTracksAreLoading: false,
    };
  }),
  on(loadMediumTermTopTracksSuccess, (state, { topTracks }) => {
    return {
      ...state,
      mediumTermTopTracks: topTracks,
      mediumTermTopTopTracksAreLoaded: true,
      mediumTermTopTopTracksAreLoading: false,
    };
  }),
  on(loadLongTermTopTracksSuccess, (state, { topTracks }) => {
    return {
      ...state,
      longTermTopTracks: topTracks,
      longTermTopTracksAreLoaded: true,
      longTermTopTracksAreLoading: false,
    };
  }),
  on(loadShortTermTopTrackFail, (state, { error }) => ({
    ...state,
    shortTermTopTrackError: error,
    shortTermTopTracksAreLoaded: true,
    shortTermTopTracksAreLoading: false,
  })),
  on(loadMediumTermTopTrackFail, (state, { error }) => ({
    ...state,
    mediumTermTopTrackError: error,
    mediumTermTopTracksAreLoaded: true,
    mediumTermTopTracksAreLoading: false,
  })),
  on(loadLongTermTopTrackFail, (state, { error }) => ({
    ...state,
    longTermTopTrackError: error,
    longTermTopTracksAreLoaded: true,
    longTermTopTracksAreLoading: false,
  }))
);

export function topTrackReducer(state: TopTrackState | undefined, action: Action): TopTrackState {
  return reducer(state, action);
}
