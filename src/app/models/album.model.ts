import { Artist } from "./artist.model";
import { Image } from "./image.model";
import { Track } from "./track.model";

export interface Album {
  id: string;
  name: string;
  artists: [Artist];
  images: [Image];
  album_type?: string;
  release_date?: string;
  tracks?: {
    total: number;
    items: Track[];
  };
}
