import { api } from ".";
import { Film, FilmList } from "../types/film";

// Manutenibilidade
export const getFilmDetails = async (filmId?: string): Promise<Film> => {
  // Fetch API do JS
  // const response: Film = await fetch(`${baseURL}&plot=full&i=${filmId}`).then(
  //   (res) => res.json()
  // );

  const response = await api.get<Film>(`?plot=full&i=${filmId}`);

  return response.data;
};

export const getFilmList = async (search: string): Promise<FilmList> => {
  //  Fetch API do JS
  // const response: FilmList = await fetch(`${baseURL}&s=${search}`).then(
  //   (result) => result.json()
  // );

  const response = await api.get<FilmList>(`?s=${search}`);

  return response.data;
};
