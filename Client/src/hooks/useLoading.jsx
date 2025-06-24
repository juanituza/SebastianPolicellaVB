import { useState } from "react";

import "./useLoading.css";

const useLoading = () => {
  const [cargando, setCargando] = useState(false);

  const mostrarCargando = () => {
    setCargando(true);
  };

  const ocultarCargando = () => {
    setCargando(false);
  };

  return { cargando, mostrarCargando, ocultarCargando };
};

export default useLoading;
