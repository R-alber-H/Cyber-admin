import { useEffect, useState } from "react";
import { getProduct, craeteProduct } from "../services/productService";


export function useProduct(){
    const [productos, setProductos] = useState([])
    const [cargando,setCargando] = useState(false);

    const cargarProductos = async () => {
    setCargando(true)
    try {
      const data = await getProduct()
      setProductos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al cargar productos:", error);
       throw error;
    }finally{
      setCargando(false)
    }
  };

  useEffect(() =>{
    cargarProductos()
  },[])

  const createProduct = async (data) =>{
    try {
      const dataResponse = await craeteProduct(data) ;
      setProductos(prev => [...prev, dataResponse]);
    } catch (error) {
      console.error("Error al crear nuevo producto:", error);
       throw error;
    }
  }

  return {
  productos,
  cargando,
  cargarProductos,
  createProduct,
};
}