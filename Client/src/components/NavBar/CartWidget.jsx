import React from "react";
import { IoBag } from "react-icons/io5";
import "./NavBar.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);
  

  return (
    <Link to='/cart' className="carrito">
      <ul className="ul-cart ">
        <li className="li-cart">
          {/* <i className="fas fa-shopping-cart"></i> */}
          <IoBag />
        </li>
        <li className="text li-cart">{cantidadTotal()}</li>
      </ul>
    </Link>
  );
}

export default CartWidget;
