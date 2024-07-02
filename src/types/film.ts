export interface Film {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Released: string;
  Actors: string;
  Genre: string;
  imdbRating: string;
  imdbVotes: string;
  Plot: string;
}

export interface FilmList {
  Search: Film[];
}
