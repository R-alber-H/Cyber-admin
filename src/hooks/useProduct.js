import { useEffect, useState } from "react";
import { get, craete, toggleStatus, update } from "../services/productService";


export function useProduct(){
    const [productos, setProductos] = useState([])
    const [cargando,setCargando] = useState(false);

    const cargarProductos = async () => {
    setCargando(true)
    try {
      const data = await get()
      setProductos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al obtener productos:", error);
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
      const dataResponse = await craete(data) ;
      setProductos(prev => [...prev, dataResponse]);
    } catch (error) {
      console.error("Error al crear nuevo producto:", error);
       throw error;
    }
  }

  const updateProduct = async (id, data) =>{
    try {
      const dataResponse = await update(id,data);
      setProductos(prev => prev.map(p => p.id === id? dataResponse :p));
    } catch (error) {
      console.error("Error al actualizar datos del producto:", error);
       throw error;
    }
  }

  const deleteProduct = async (id) => {
    try {
      const dataResponse = await toggleStatus(id);
      setProductos(prev => prev.map(p => p.id === id? dataResponse :p));
    } catch (error) {
      console.error("Error al actualizar estado del producto:", error);
       throw error;
    }
  }

  return {
  productos,
  cargando,
  cargarProductos,
  createProduct,
  updateProduct,
  deleteProduct,
};
}