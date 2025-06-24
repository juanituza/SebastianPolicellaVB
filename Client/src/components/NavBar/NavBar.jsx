import React from "react";
import "./NavBar.css";

import useFetch from "../../hooks/useFetch.jsx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

const NavBar = () => {
  const { cargando } = useFetch();
  return (

    <div className="row">
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-cente">
        {cargando ? (
          <div className="sweet-loading ">
            <BounceLoader color="#ac7807" size={50} speedMultiplier={1.5} margin={2} />
          </div>
        ) : (
          <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <Link to="/" className="col-4">

              <h1 className="my-3"> <span className="lavishly-yours-regular">Sebastian Policella</span></h1>
            </Link>


            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => "nav-link scrollto" + (isActive ? " active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bodega1"
                    className={({ isActive }) => "nav-link scrollto" + (isActive ? " active" : "")}
                  >
                    Referente
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bodega2"
                    className={({ isActive }) => "nav-link scrollto" + (isActive ? " active" : "")}
                  >
                    Bodega 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bodega3"
                    className={({ isActive }) => "nav-link scrollto" + (isActive ? " active" : "")}
                  >
                    Bodega 3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) => "nav-link scrollto" + (isActive ? " active" : "")}
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* <!-- .navbar --> */}

            <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

          </div>
        )}
      </header>
      {/* <!-- End Header --> */}




     





    </div>
  );
};

export default NavBar;
