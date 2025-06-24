import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";

import { CartContext } from "../../context/CartContext";

import "./Cart.css";
const Cart = () => {
  const { carrito, precioTotal, eliminarProducto, vaciarCarrito } =
    useContext(CartContext);
  //Early return o return temprano
  if (carrito.length === 0) {
    return (
      <div className="card">
        <div className="row  g-3 justify-content-center">
          <div className="col-6 m-3">
            <h1>Cart is empty 😯</h1>
            <p>The cart is empty, please browse our site and add products.</p>
            <Link to="/" className="btn btn-primary btn-custom m-3">
              See Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ul className="lista card">
        {carrito.map((productoCarrito) => (
          <li key={productoCarrito.id} className="li-product card-list">
            <img src={productoCarrito.image} alt="imagen del producto" />
            <p className="title m-3">{productoCarrito.title}</p>
            <p className="cantidad m-3">amount : {productoCarrito.cantidad}</p>
            <p className="cantidad m-3">
              Unit price = ${productoCarrito.price}
            </p>
            <p className="cantidad m-3">
              Partial price = $
              {productoCarrito.price * productoCarrito.cantidad}
            </p>

            <button
              className="btn btn-danger-custom"
              onClick={() => eliminarProducto(productoCarrito.id)}
            >
              Delete product <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <h2>Total price: ${precioTotal()}</h2>
      <Link to="/checkout" className="btn btn-success btn-custom m-3">
        Checkout <CgCheckO />
      </Link>
      <button className="btn btn-danger btn-custom" onClick={vaciarCarrito}>
        Empty cart <FaTrash />
      </button>
    </div>
  );
};

export default Cart;
