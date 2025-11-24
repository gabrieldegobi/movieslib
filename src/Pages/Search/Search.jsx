import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import MovieCard from "../../Components/MovieCard/MovieCard";

import styles from "./Search.module.css";
import Carregando from "../../Components/Carregando/Carregando";
import UseFetchSearch from "../../Hooks/UseFetchSearch";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { movies } = UseFetchSearch(query);

  
  const navigate = useNavigate();
  useEffect(() => {
    if (movies.length === 0) {
      console.log("oi");

      const timer = setTimeout(() => {
        navigate("*");
      }, 1000 * 10);

      return () => clearTimeout(timer);
    }
  }, [movies, navigate]);

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
