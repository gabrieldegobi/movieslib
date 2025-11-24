import { useState } from "react";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const UseFetchSearch = (query) => {
  const [movies, setMovies] = useState([]);

  const getSearchMovies = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    setMovies(data.results);
  };

  const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
  getSearchMovies(searchWithQueryURL);

  return { movies };
};

export default UseFetchSearch;
