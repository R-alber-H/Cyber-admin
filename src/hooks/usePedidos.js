import { get, create, changeStatus } from "../services/pedidosService";
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
  };

  const cambiarEstado = async (id, data) => {
    try {
      const dataResponse = await changeStatus(id, data);
      setPedidos(prev => prev.map(p =>
        p.id === id
          ? { ...p, status_history: [...p.status_history, dataResponse] }
          : p
      ));
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      throw error
    }
  }

  return {
    pedidos,
    cargando,
    crearPedido,
    cambiarEstado,
  }
}