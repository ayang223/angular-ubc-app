import { Action, createReducer, on } from "@ngrx/store";
import { RecentlyPlayedState } from "../../models/recently-played.state";
import {
  loadRecentlyPlayed,
  loadRecentlyPlayedFail,
  loadRecentlyPlayedSuccess,
} from "../actions/recently-played.action";

const initialState: RecentlyPlayedState = {
  recentlyPlayed: [],
  recentlyPlayedAreLoaded: false,
  recentlyPlayedAreLoading: false,
  recentlyPlayedError: "",
};

const reducer = createReducer<RecentlyPlayedState>(
  initialState,
  on(loadRecentlyPlayed, (state) => ({ ...state, recentlyPlayedAreLoading: true })),
  on(loadRecentlyPlayedSuccess, (state, { recentlyPlayed }) => {
    return {
      ...state,
      recentlyPlayed,
      recentlyPlayedAreLoaded: true,
      recentlyPlayedAreLoading: false,
    };
  }),

  on(loadRecentlyPlayedFail, (state, { error }) => ({
    ...state,
    recentlyPlayedError: error,
    recentlyPlayedAreLoaded: true,
    recentlyPlayedAreLoading: false,
  }))
);

export function recentlyPlayedReducer(state: RecentlyPlayedState | undefined, action: Action): RecentlyPlayedState {
  return reducer(state, action);
}
