import React from 'react';
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className=" contenedor text-center p-5">
      <h1 className='text-light '>404 - Producto no encontrado</h1>
      <p className='text-light'>Perdón, este producto no se encuentra en nuestra tienda.</p>
      <Link to="/" className="btn btn-danger">
        Volver
      </Link>
    </div>
  );
};

export default ErrorPage;
