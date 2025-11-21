import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../Components/MovieCard/MovieCard";

import styles from "./Search.module.css";
import Carregando from "../../Components/Carregando/Carregando";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchWithQueryURL);
    getSearchMovies(searchWithQueryURL);
  }, []);
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      <div className={styles.movies_container}>
        {movies.length === 0 && <Carregando />}
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
