import React from "react";
import { Link } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav id="navBar">
      <h2>
        <Link to="/">
          <BiCameraMovie></BiCameraMovie> MoviesLib
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque Um Filme" />
        <button type="submit">
          <BiSearchAlt2></BiSearchAlt2>
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
