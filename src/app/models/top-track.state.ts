import { Track } from "./track.model";

export interface TopTrackState {
  shortTermTopTracks: Track[];
  mediumTermTopTracks: Track[];
  longTermTopTracks: Track[];

  shortTermTopTracksAreLoading: boolean;
  shortTermTopTracksAreLoaded: boolean;

  mediumTermTopTopTracksAreLoading: boolean;
  mediumTermTopTopTracksAreLoaded: boolean;

  longTermTopTracksAreLoading: boolean;
  longTermTopTracksAreLoaded: boolean;
  shortTermTopTrackError: string;
  mediumTermTopTrackError: string;
  longTermTopTrackError: string;
}
