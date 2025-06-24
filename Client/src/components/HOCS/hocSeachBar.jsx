import { useState } from "react";
import useFetch from "../../hooks/useFetch.jsx";
import BounceLoader from "react-spinners/BounceLoader";

const hocSeachBar = (Component) => {
  return function () {
    // const [items,setItems]=useState([])
    const { productos, cargando } = useFetch();
    const [consulta, setConsulta] = useState("");

    const search = (listarProductos) => {
      const listarProductosFiltrados = listarProductos.filter((producto) =>
        producto["title"].toLowerCase().includes(consulta)
      );

      return listarProductosFiltrados;
    };

    //Funcion manejadora del evento onChange ligada al input buscador
    const handleInputChange = (event) => {
      setConsulta(event.target.value.toLowerCase());
    };

    return (
      productos && (
        <>
          <div className="col-3">
            <input
              type="text"
              placeholder="buscar..."
              onChange={handleInputChange}
              className="form-control col-3"
            />
          </div>
          {cargando ? (
            <div className="sweet-loading">
              <BounceLoader
                color="#0D6EFD"
                size={50}
                speedMultiplier={1}
                margin={2}
              />
            </div>
          ) : (
            productos && <Component productos={search(productos)} />
          )}
          {/* <Component productos={search(productos)} /> */}
        </>
      )
    );
  };
};
export default hocSeachBar;