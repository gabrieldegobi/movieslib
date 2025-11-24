import React, { useState } from 'react'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const UseFetchMovie = (id) => {


const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);

      const data = await res.json();

      setMovie(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const movieURL = `${moviesURL}${id}?api_key=${apiKey}`;
  getMovie(movieURL);
 


  return {movie}
}
export default UseFetchMovie