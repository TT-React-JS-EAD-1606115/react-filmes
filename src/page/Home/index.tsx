import { ChangeEvent, useEffect, useState } from "react";
import { Film } from "../../types/film";
import { Card } from "../../components/Card";
import "./styles.css";
import { getFilmList } from "../../api/film";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Home = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("Hulk");

  const handleSearchFilms = async () => {
    setIsLoading(true);

    const response = await getFilmList(search);

    setFilms(response.Search);
    setIsLoading(false);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch(value);
  };

  const handleSearch = () => {
    handleSearchFilms();
  };

  useEffect(() => {
    handleSearchFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="search-container">
        <Input value={search} onChange={handleChangeSearch} />

        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      <div className="films-container">
        {isLoading ? (
          <div>
            <span>Carregando listagem de filmes...</span>
          </div>
        ) : (
          films.map((film) => {
            return <Card key={film.imdbID} film={film} />;
          })
        )}
      </div>
    </>
  );
};
