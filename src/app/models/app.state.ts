import { RecentlyPlayedState } from "./recently-played.state";
import { TopArtistState } from "./top-artists.state";
import { TopTrackState } from "./top-track.state";

export interface AppState {
  topTracks: TopTrackState;
  topArtists: TopArtistState;
  recentlyPlayed: RecentlyPlayedState;
}
