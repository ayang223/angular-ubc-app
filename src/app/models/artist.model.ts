import { Image } from "./image.model";

export interface Artist {
  id: string;
  name: string;
  images: [Image];
  followers?: {
    total: number;
  };
  genres?: [string];
  external_urls: { spotify: string };
}
