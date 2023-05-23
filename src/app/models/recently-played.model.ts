import { Track } from "./track.model";

export interface RecentlyPlayed {
  context: {
    external_urls: { spotify: string };
    href: string;
    type: string;
    uri: string;
  };
  track: Track;
  played_at: string;
}
