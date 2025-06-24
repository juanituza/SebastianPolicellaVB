import { useState, useContext } from "react";

import { CartContext } from "../../context/CartContext";

import db from "../../db/dataBase.js";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import FormularioCheckout from "./FormularioCheckout";
import Swal from "sweetalert2";
import validateForm from "../../utils/validacionFormulario.js";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmEmail: "",
  });

  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    // Validar los campos del formulario
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      sendOrder(orden);
    } else {
      await Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: response.message,
      });
    }
  };
  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "pedidos");
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDb.id);
      await Swal.fire({
        // position: "top-center",
        icon: "success",
        title: "Pedido realizado con éxito!",
        text: `El numero de su compra es : ${ordenDb.id}`,
      });

      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {idOrden ? null : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
