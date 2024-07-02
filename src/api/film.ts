import { Film, FilmList } from "../types/film";

const baseURL = "https://www.omdbapi.com/?apikey=3295fc54";

// Manutenibilidade
export const getFilmDetails = async (filmId: string): Promise<Film> => {
  const response: Film = await fetch(`${baseURL}&plot=full&i=${filmId}`).then(
    (res) => res.json()
  );

  return response;
};

export const getFilmList = async (search: string): Promise<FilmList> => {
  const response: FilmList = await fetch(`${baseURL}&s=${search}`).then(
    (result) => result.json()
  );

  return response;
};
