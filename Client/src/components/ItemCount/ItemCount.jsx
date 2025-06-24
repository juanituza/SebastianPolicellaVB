import { useState, useEffect } from "react";


function ItemCount({ stock, initial, agregarAlCarrito }) {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const descontarContador = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };
  
  return (
    <div className="row mt-5 body">
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-dark" onClick={descontarContador}>
          -
        </button>
        <span className="input-group-text number">{contador}</span>
        <button className="btn btn-outline-dark" onClick={aumentarContador}>
          +
        </button>
      </div>

      <button
        className="btn btn-outline-primary mt-2 boton"
        onClick={() => agregarAlCarrito(contador)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
