import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsFillFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2,
} from "react-icons/bs";
import MovieCard from "../../Components/MovieCard/MovieCard";

import styles from "./Movie.module.css";
import Carregando from "../../Components/Carregando/Carregando";
import { FaStar } from "react-icons/fa";
import UseFetchMovie from "../../Hooks/UseFetchMovie";

const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const { movie } = UseFetchMovie(id);

  const formatCurrency = (number) => {
    return number.toLocaleString("us-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className={styles.container}>
      {movie === null && <Carregando />}

      {movie && (
        <div className={styles.movie}>
          <div className={styles.card}>
            <div className={styles.data}>
              <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            </div>
          </div>
          <div className={styles.infos}>
            <div className={styles.info}>
              <h3>
                <BsWallet2 />
                Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className={styles.info}>
              <h3>
                <BsWallet2 />
                Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className={styles.info}>
              <h3>
                <BsGraphUp />
                Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className={styles.info}>
              <h3>
                <BsHourglassSplit />
                Duração:
              </h3>
              <p>{movie.runtime} Minutos</p>
            </div>

            <div className={`${styles.info} ${styles.description}`}>
              <h3>
                <BsFillFileEarmarkTextFill />
                Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
