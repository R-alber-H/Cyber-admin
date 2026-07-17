import { TbListDetails } from "react-icons/tb";
import { TbStatusChange } from "react-icons/tb";
import { getEstadoActual, ESTILOS_ESTADO, VALID_TRANSITIONS } from "../utils/pedidos_util";

export function crearColumnasPedidos(onVerPedido, onCambiarEstado) {

    const columnasPedidos = [
        {
            header: "ID",
            accessor: "id",
            className: "w-16",
            render: (value) => <span className="font-mono text-gray-400">{value}</span>
        },
        {
            header: "Cliente",
            accessor: "user",
            render: (value) => <span className="text-gray-500">{value.name}</span>
        },
        {
            header: "Total",
            accessor: "total",
            render: (value) => <span className="text-gray-500">{value}</span>
        },
        {
            header: "Metodo de Pago",
            accessor: "payment_method",
            render: (value) => <span className="text-gray-500">{value.name}</span>
        },

        {
            header: "Direccion Entrega",
            accessor: "delivery_address",
            render: (value) => <span className="text-gray-500">{value}</span>
        },
        {
            header: "Entrega",
            accessor: "is_delivery",
            render: (value) => <span className="text-gray-500">{value ? "Delivery" : "En Tienda"}</span>
        },
        {
            header: "Estado",
            accessor: "status_history",
            render: (value) => {
                const ultimoEstado = getEstadoActual(value);
                const nombreEstado = ultimoEstado.state;
                const clasesColor = ESTILOS_ESTADO[nombreEstado] || ESTILOS_ESTADO['default'];
                return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${clasesColor}`}>{nombreEstado}</span>;
            }
        },
        {
            header: "Detalles",
            render: (pedido) => {
                const ultimoEstado = getEstadoActual(pedido.status_history);
                const nombreEstado = ultimoEstado?.state;
                const tieneTransiciones = VALID_TRANSITIONS[nombreEstado]?.length > 0;

                return (
                    <div className="w-24 flex gap-4 items-center">
                        <button onClick={() => onVerPedido(pedido)}><TbListDetails color="#3b82f6" size={20} /></button>
                        {tieneTransiciones && (
                            <button onClick={() => onCambiarEstado && onCambiarEstado(pedido)}><TbStatusChange color="#10b981" size={20} /></button>
                        )}
                    </div>
                );
            }
        }
    ];
    return columnasPedidos;
}