import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDom from "react-dom/client";

// Components
import App from "../App";
import Home from "../Pages/Home/Home";
import Movie from "../Pages/Movie/Movie";
import Search from "../Pages/Search/Search";
import NotFound from "../Pages/NotFound/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
