import { useContext } from "react";
import { Link } from "react-router-dom";


import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

import Swal from "sweetalert2";

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
 

  return (
    <>
      <div id="detail" className="mt-5 row align-items-center d-flex   ">
        <div className="col-12 align-items-center d-flex flex-column">
            <p className="texto-card fs-4 fw-bold text-uppercase align-items-center">{product.nombre}</p>
          </div>
        <div className="col-3 ms-5 d-flex flex-column">
         <img src={product.imagen} alt={product.nombre} className="img-producto" />
          
        </div>
        <div className="col-8  ">
          
          
          <p className="texto-black">{product.nombre}</p>
          <p className="texto-black">{product.categoria}</p>
          <p className="texto-black ">{product.descripcion}</p>
         
        </div>
        <div className="detail-text my-5 d-flex justify-content-center">
          <Link to="/" className="btn btn-secondary col-3 ms-4 justify-content-center">
            Back
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default ItemDetail;
