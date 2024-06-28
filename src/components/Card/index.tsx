import { Film } from "../../types/film";
import "./styles.css";

interface CardProps {
  film: Film;
}

export const Card = ({ film }: CardProps) => {
  return (
    <div className="card-container">
      <img src={film.Poster} alt="poster" />

      <a href="#home">{film.Title}</a>

      <span>Ano: {film.Year}</span>
      <span>ID: {film.imdbID}</span>
    </div>
  );
};
