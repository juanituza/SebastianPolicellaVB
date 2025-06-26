import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { productos, cargando } = useFetch();

  const ordenCampos = ["nombre", "cepa", "ubicacion", "VINIFICACIÓN"];

  const formatearCampo = (campo) => {
    const nombresBonitos = {
      nombre: "Nombre",
      cepa: "Cepa",
      ubicacion: "Ubicación",
      VINIFICACIÓN: "Vinificación",
    };

    return nombresBonitos[campo] || campo
      .replace(/_/g, " ")
      .replace(/^\w/, (l) => l.toUpperCase());
  };

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
          className="row mb-5 p-4 border rounded shadow-sm align-items-start"
        >
          {/* Imagen */}
          <div className="col-md-3 mb-3">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="img-fluid rounded shadow img-producto"
            />
          </div>

          {/* Ficha de datos */}
          <div className="col-md-9">
            <dl className="row">
              {ordenCampos
                .filter((key) => key in product)
                .map((key) => (
                  <div key={key} className="col-12 row mb-2">
                    <dt className="col-sm-4 fw-bold texto-black">
                      {formatearCampo(key)}:
                    </dt>
                    <dd className="col-sm-8 texto-black " >
                      {product[key]}
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
