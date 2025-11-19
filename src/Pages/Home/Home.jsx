import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import styles from "./Home.module.css"

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    console.log(topRateUrl);
    getTopRatedMovies(topRateUrl);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Melhores Filmes:</h2>

      <div className={styles.movies_container}>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies && topMovies.map((movie) =>(
          <MovieCard key={movie.id} movie={movie}/>
        ) )}
      </div>
    </div>
  );
};

export default Home;
