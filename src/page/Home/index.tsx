import { useEffect, useState } from "react";
import { Film } from "../../types/film";
import { Card } from "../../components/Card";
import "./styles.css";

export const Home = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const handleSearchFilms = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=b5394a70&s=Avengers"
    ).then((result) => result.json());

    setFilms(response.Search);
  };

  useEffect(() => {
    handleSearchFilms();
  }, []);

  return (
    <div className="films-container">
      {films.map((film) => {
        return <Card key={film.imdbID} film={film} />;
      })}
    </div>
  );
};
