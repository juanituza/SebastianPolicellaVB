import React from "react";
import "./NavBar.css";

import useFetch from "../../hooks/useFetch.jsx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const { cargando, productos } = useFetch();

  // Buscar los productos por título
  const categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  return (
    <div className="row">
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-cente">
        {cargando ? (
          <div className="sweet-loading ">
            <BounceLoader
              color="#ac7807"
              size={50}
              speedMultiplier={1.5}
              margin={2}
            />
          </div>
        ) : (
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            {/* Logo a la izquierda */}
            <Link to="/" className="logo-wrapper">
              <img src="/El arte del vino.png" alt="Logo" className="logo" />
            </Link>

            {/* Menú centrado */}
            <nav id="navbar" className="navbar mx-auto">
              <ul className="d-flex align-items-center justify-content-center mb-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-link scrollto" + (isActive ? " active" : "")
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {categoriasUnicas.map((categoria) => (
                  <li key={categoria}>
                    <NavLink
                      to={`/categoria/${categoria}`}
                      className={({ isActive }) =>
                        "nav-link scrollto" + (isActive ? " active" : "")
                      }
                    >
                      {categoria}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botón de contacto a la derecha */}
            <div className="d-flex align-items-center gap-3">
              <NavLink
                to="/contacto"
                className="btn-contacto d-none d-lg-block"
              >
                Contacto
              </NavLink>
              <a
                href="https://wa.link/yq2a2x"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-floating"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        )}
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
};

export default NavBar;
