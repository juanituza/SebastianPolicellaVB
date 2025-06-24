import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import db from "../db/dataBase.js";
import useLoading from "./useLoading";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

const useFetch = () => {
  const [productos, setProductos] = useState([]);
  const [product, setProduct] = useState({});
  const { cargando, mostrarCargando, ocultarCargando } = useLoading();
  const { idCategoria, productoId } = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const productosRef = collection(db, "bodegas");
      const dataDb = await getDocs(productosRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      ocultarCargando(); // Ocultar carga una vez que se obtienen los productos
    }
  };

  const getProductsByCategory = async () => {
    try {
      if (idCategoria) {
        const productosRef = collection(db, "bodegas");
        const q = query(productosRef, where("category", "==", idCategoria));

        const dataDb = await getDocs(q);

        const data = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });

        setProductos(data);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      ocultarCargando(); // Ocultar carga una vez que se obtienen los productos
    }
  };
  useEffect(() => {
    mostrarCargando();
    if (idCategoria) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategoria]);

  // const getProduct = async () => {
  //   try {
  //     if (productoId) {
  //       const docRef = doc(db, "Bodegas", productoId);
  //       const dataDb = await getDoc(docRef);
  //       const data = { id: dataDb.id, ...dataDb.data() };

  //        if (dataDb.exists()) {
  //          const data = { id: dataDb.id, ...dataDb.data() };
  //          setProduct(data);
  //        } else {
  //          // Si el producto no existe, redirigir a la página de error
  //          navigate("/error");
  //        }
  //     }
  //   } catch (error) {
  //     console.error("Error al obtener el producto:", error);
  //   }
  // };

  const getProduct = async () => {
  try {
    if (productoId) {
      const docRef = doc(db, "bodegas", productoId);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
      } else {
        // Redirigir si no existe
        navigate("/error");
      }
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
  } finally {
    ocultarCargando();
  }
};


 useEffect(() => {
  if (productoId) {
    getProduct();
  }
}, [productoId]); 

  return { productos, cargando, product };
};

export default useFetch;
