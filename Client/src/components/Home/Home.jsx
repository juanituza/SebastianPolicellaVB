import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import useFetch from "../../hooks/useFetch.jsx";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const { productos, cargando } = useFetch();

  // Nombres que querés mostrar con link
  const nombresProductosDeseados = ["Sociedad secreta", "Gran referente", "Pura Rebeldía"];

  // Buscar los productos por título
  const productosFiltrados = productos.filter(producto =>
    nombresProductosDeseados.includes(producto.nombre)
  );



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="about" className="about">
      {cargando ? (
        <div className="sweet-loading">
          <BounceLoader color="#ac7807" size={50} speedMultiplier={1.5} margin={2} />
        </div>
      ) : (

        <div >
          {/* <!-- ======= Hero Section ======= --> */}
          <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="row">
                <div className="col-lg-8">
                  <h2 >Bienvenidos a</h2>
                  <h1 className="my-3"> <span className="lavishly-yours-regular">Sebastian Policella</span></h1>
                  <h2>Vinos boutique</h2>

                  <div className="btns">
                    <Link to="/bodega1" className="btn-menu animated fadeInUp scrollto me-2">Bodegas</Link>
                    <Link to="/bodega1" className="btn-menu animated fadeInUp scrollto">Contacto</Link>
                  </div>
                </div>
                {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
        </div> */}

              </div>
            </div>
          </section>
          {/* <!-- End Hero --> */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                  <div className="about-img">
                    <img src="/imagenes/background1.JPG" alt="" />
                  </div>
                </div>

                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3 className="fst-italic">Guiar con las palabras, Inspirar con el ejemplo.</h3>
                  <p className="fst-italic">
                    En Sebastián Pollicella, nos dedicamos con pasión a seleccionar y ofrecer vinos boutique de alta calidad,
                    cuidadosamente elaborados en el corazón del Valle de Uco, Mendoza.
                    Nuestra misión es acercar al consumidor experiencias únicas a través de etiquetas con identidad, historia y carácter.
                    Nos enorgullece representar vinos como:
                  </p>

                  <ul>
                    {productosFiltrados.map(producto => (
                      <li key={producto.id} className="fst-italic">
                        <i className="bi bi-check-circle"></i>{" "}
                        <Link to={`/detalle/${producto.id}`} className=" bodega">
                          {producto.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="fst-italic">
                    En cada botella hay una historia, un origen, y una rebeldía que se expresa con autenticidad. Te invitamos a descubrirlos y ser parte de este viaje sensorial.
                  </p>
                </div>
              </div>
            </div>
          </section>


        </div>
      )}
    </div>
  );
}

export default Home;
