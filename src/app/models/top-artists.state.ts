import { Artist } from "./artist.model";

export interface TopArtistState {
  shortTermTopArtists: Artist[];
  mediumTermTopArtists: Artist[];
  longTermTopArtists: Artist[];
  shortTermTopArtistsAreLoading: boolean;
  shortTermTopArtistsAreLoaded: boolean;

  mediumTermTopTopArtistsAreLoading: boolean;
  mediumTermTopTopArtistsAreLoaded: boolean;

  longTermTopArtistsAreLoading: boolean;
  longTermTopArtistsAreLoaded: boolean;

  shortTermTopArtistsError: string;
  mediumTermTopArtistsError: string;
  longTermTopArtistsError: string;
}
