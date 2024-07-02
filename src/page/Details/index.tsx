import { useEffect, useState } from "react";
import { Film } from "../../types/film";
import "./styles.css";
import { getFilmDetails } from "../../api/film";

export const Details = () => {
  const [film, setFilm] = useState<Film>();

  const handleGetDetails = async () => {
    const response = await getFilmDetails("tt0800080");

    setFilm(response);
  };

  useEffect(() => {
    handleGetDetails();
  }, []);

  return (
    <div className="details-container">
      {film ? (
        <>
          <div className="film-section">
            <img src={film?.Poster} alt="poster" />

            <div className="details">
              <h1>{film?.Title}</h1>

              <div className="infos">
                <ul>
                  <li>Lançamento: {film?.Released}</li>

                  <li>Gênero: {film?.Genre}</li>

                  <li>Atores: {film?.Actors}</li>

                  <li>
                    Pontuação IMDB: {film?.imdbRating} - {film?.imdbVotes}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="plot">{film?.Plot}</p>
        </>
      ) : (
        <div className="loading">
          <span>Carregando filme...</span>
        </div>
      )}
    </div>
  );
};
