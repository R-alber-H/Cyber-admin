import { TbListDetails } from "react-icons/tb";

export function crearColumnasPedidos(onVerPedido) {
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
            render: (value) => <span className="text-gray-500">{value? "Delivery" :"En Tienda"}</span>
        },
        {
            header: "Estado",
            accessor: "status_history",
            render: (value) => {
                const nombres = value.map((v) => v.state).join(", ");
                return <span className="text-gray-500 bg">{nombres}</span>;
            }
        },
        {
            header: "Detalles",
            render: (pedido) => (
                <button  onClick={() => onVerPedido(pedido)}><TbListDetails color="#3b82f6" size={20} /></button>
            )
        }
    ];
    return columnasPedidos;
}