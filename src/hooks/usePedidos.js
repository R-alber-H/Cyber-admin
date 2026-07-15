import { get,create } from "../services/pedidosService";
import { useEffect, useState } from "react";

export default function usePedidos() {
  const [pedidos, setPedidos] = useState([])
  const [cargando, setCargando] = useState(false);

  const cargarPedidos = async () => {
    setCargando(true)
    try {
      const data = await get()
      setPedidos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
      throw error;
    } finally {
      setCargando(false)
    }
  };

  useEffect(() => {
    cargarPedidos()
  }, [])

  const crearPedido = async (data) => {
    try {
      const dataResponse = await create(data);
      setPedidos(prev => [...prev, dataResponse]);
    } catch (error) {
      console.error("Error al crear nuevo pedido:", error);
      throw error;
    }
  }


  return {
    pedidos,
    cargando,
    crearPedido,
  }
}