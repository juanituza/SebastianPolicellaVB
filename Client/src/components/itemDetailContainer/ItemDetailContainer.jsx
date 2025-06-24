import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

import "./itemDetailContainer.css";


const ItemDetailContainer = () => {
  const { cargando, product } = useFetch();
  
  

  return (
    <>
      {cargando ? (
        <div className="sweet-loading">
          <BounceLoader
            color="#0D6EFD"
            size={50}
            speedMultiplier={1.5}
            margin={2}
          />
        </div>
      ) : (
          <div id="detail-container" >
        <ItemDetail  product={product} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
