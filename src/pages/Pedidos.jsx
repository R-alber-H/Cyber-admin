import { crearColumnasPedidos } from "../columns/columnsPedidos";
import usePedidos from "../hooks/usePedidos";
import Table from '../components/Table';
import { HiPlus } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ModalDetalle from "../components/Modal_Detalle_Pedido";
import ModalCambiarEstado from "../components/Modal_Cambiar_estado";

export default function Pedidos() {
    const { pedidos, cargando,cambiarEstado } = usePedidos();
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
    const [pedidoCambioEstado, setPedidoCambioEstado] = useState(null);

    const onVerPedido = (pedido) =>{
        setPedidoSeleccionado(pedido);
    };

    const onCambiarEstado = (pedido) =>{
        setPedidoCambioEstado(pedido);
    }

    const columnasPedidos = crearColumnasPedidos(onVerPedido, onCambiarEstado);
    const navigate = useNavigate();

    const closed = () => {
        setPedidoSeleccionado(null);
    };

    const closedEstado = () => {
        setPedidoCambioEstado(null);
    };

    const onConfirmar = async (pedidoId, nuevoEstado) => {
        try {
            await cambiarEstado(pedidoId, nuevoEstado);
            console.log("Estado cambiado con éxito a:", nuevoEstado);
        } catch (error) {
            console.error("Error al cambiar el estado:", error);
        }
    };

    return (
        <div>
            <div className="flex flex-row justify-between px-6 py-4 mb-2 py">
                <h3 className="text-3xl font-bold ">Pedidos</h3>
                <button
                    onClick={() => navigate("/nuevo_pedido")}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 "
                >
                    <HiPlus size={18} />
                    Nuevo pedido
                </button>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <Table columns={columnasPedidos} data={pedidos} />
            </div>
            {pedidoSeleccionado && <ModalDetalle pedido={pedidoSeleccionado} onClose={ closed}/>}
            {pedidoCambioEstado && <ModalCambiarEstado pedido={pedidoCambioEstado} onClose={closedEstado} onConfirmar={onConfirmar}/>}

        </div>
    )
}