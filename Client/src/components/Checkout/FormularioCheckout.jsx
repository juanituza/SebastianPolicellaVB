import React from 'react'

const FormularioCheckout = ({handleSubmitForm, datosForm, handleChangeInput}) => {
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="row g-3 justify-content-center">
          <div className="col-6 m-3">
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={datosForm.nombre}
                onChange={handleChangeInput}
              />
              <label>Nombre:</label>
            </div>
          </div>
          <div className="col-6 m-3">
            <div className="form-floating">
              <input
                className="form-control col-1"
                type="text"
                name="telefono"
                value={datosForm.telefono}
                onChange={handleChangeInput}
              />
              <label>Teléfono:</label>
            </div>
          </div>
          <div className="col-md-6 m-3">
            <div className="form-floating">
              <input
                className="form-control col-1"
                type="text"
                name="email"
                value={datosForm.email}
                onChange={handleChangeInput}
              />
              <label>Email:</label>
            </div>
          </div>
          <div className="col-md-6 m-3">
            <div className="form-floating">
              <input
                className="form-control col-1"
                type="text"
                name="confirmEmail"
                value={datosForm.confirmEmail}
                onChange={handleChangeInput}
              />
              <label>Confirmar email:</label>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <button
            className="btn btn-success rounded-pill py-3 px-5"
            type="submit"
          >
            Enviar datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCheckout