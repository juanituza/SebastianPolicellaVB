import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (productoNuevo) => {
    const condition = productoAgregado(productoNuevo.id);
    if (condition) {
      let nuevoCarrito = [...carrito];
      nuevoCarrito.forEach((productoCarrito) => {
        if (productoCarrito.id === productoNuevo.id) {
          productoCarrito.cantidad =
            productoCarrito.cantidad + productoNuevo.cantidad;
        }
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoNuevo]);
    }
  };

  const productoAgregado = (productoId) => {
    const condicion = carrito.some(
      (productoCarrito) => productoCarrito.id === productoId
    );
    return condicion;
  };
  const cantidadTotal = () => {
    const totalProductos = carrito.reduce(
      (total, productoCarrito) => total + productoCarrito.cantidad,
      0
    );
    return totalProductos;
  };

  const precioTotal = () => {
    const precio = carrito.reduce(
      (total, productoCarrito) =>
        total + productoCarrito.cantidad * productoCarrito.price,
      0
    );
    return precio;
  };

  const eliminarProducto = (productoId) => {
    const productosFinales = carrito.filter(
      (producto) => producto.id !== productoId
    );
    setCarrito(productosFinales);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        precioTotal,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
