import { RecentlyPlayed } from "./recently-played.model";

export interface RecentlyPlayedState {
  recentlyPlayed: RecentlyPlayed[];
  recentlyPlayedAreLoading: boolean;
  recentlyPlayedAreLoaded: boolean;
  recentlyPlayedError: string;
}
