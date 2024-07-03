import { useNavigate } from "react-router-dom";
import { Film } from "../../types/film";
import "./styles.css";

interface CardProps {
  film: Film;
}

export const Card = ({ film }: CardProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
    navigate(`/details/${film.imdbID}`);
  };

  return (
    <div className="card-container" onClick={handleNavigateToDetails}>
      <img src={film.Poster} alt="poster" />

      <p>{film.Title}</p>

      <span>Ano: {film.Year}</span>
      <span>ID: {film.imdbID}</span>
    </div>
  );
};
