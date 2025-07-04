import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { productos, cargando } = useFetch();

  // Lista de campos que NO queremos mostrar
  const camposIgnorados = ["id", "imagen", "categoria","nombre"];

  const formatearCampo = (campo) =>
    campo
      .replace(/_/g, " ")
      .replace(/^\w/, (l) => l.toUpperCase());

  if (cargando) {
    return <p className="text-center my-5">Cargando productos...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center texto-card mb-5 text-uppercase">
        {productos[0]?.categoria || "Categoría"}
      </h2>

      {productos.map((product) => (
        <div
          key={product.id}
          className="row mb-5 p-4 border rounded  carta  align-items-start"
        > <div>
            <h2 className="col-sm-12 fw-bold nombre">{product.nombre}</h2>
            {/* text-primary text-uppercase text-center */}
          </div>
          {/* Imagen */}
          <div className="col-md-3 mb-3">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="img-fluid rounded  img-producto"
            />
          </div>
         
          {/* Ficha de datos */}
          <div className="col-md-9">
            <dl className="row">
              {Object.entries(product)
                .filter(([key]) => !camposIgnorados.includes(key))
                .map(([key, value]) => (
                  <div key={key} className="col-12 row mb-2">
                    <dt className="col-sm-4 fw-bold texto-black">
                      {formatearCampo(key)}:
                    </dt>
                    <dd className="col-sm-8 texto-black">
                      {value}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-warning">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
