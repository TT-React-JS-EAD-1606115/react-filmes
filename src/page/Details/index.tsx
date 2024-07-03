import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Film } from "../../types/film";
import "./styles.css";
import { getFilmDetails } from "../../api/film";

export const Details = () => {
  const [film, setFilm] = useState<Film>();
  const params = useParams<{ id: string }>();

  const handleGetDetails = async () => {
    const response = await getFilmDetails(params.id);

    setFilm(response);
  };

  useEffect(() => {
    handleGetDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="details-container">
      {film ? (
        <>
          <div className="film-section">
            <img src={film?.Poster} alt="poster" />

            <div className="details">
              <div className="title-container">
                <h1>{film?.Title}</h1>
              </div>

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
