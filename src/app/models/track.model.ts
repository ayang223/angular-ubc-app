import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Track {
  id: string;
  name: string;
  album: Album;
  artists: [Artist];
  duration_ms: number;
  preview_url: string;
  external_urls: { spotify: string };
  uri: string;
}
