import { crearColumnasPedidos } from "../columns/columnsPedidos";
import usePedidos from "../hooks/usePedidos";
import Table from '../components/Table';
import { HiPlus } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ModalDetalle from "../components/Modal_Detalle_Pedido";

export default function Pedidos() {
    const { pedidos, cargando } = usePedidos();
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

    const onVerPedido = (pedido) =>{
        setPedidoSeleccionado(pedido);
    }

    const columnasPedidos = crearColumnasPedidos(onVerPedido);
    const navigate = useNavigate();

    
    const closed = () => {
        setPedidoSeleccionado(null);
    }
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

        </div>
    )
}