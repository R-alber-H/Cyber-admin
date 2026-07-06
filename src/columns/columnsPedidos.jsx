
import { GrEdit } from "react-icons/gr";
import { ToggleSwitch } from "../components/ToggleSwitch";

export function crearColumnasPedidos() {
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
        // {
        //     header: "Accion",
        //     render: (producto) => (<div className="w-24 flex gap-4 items-center">
        //         <button disabled={!producto.active} onClick={() => onEditar(producto)}><GrEdit color={producto.active ? "#2563eb" : "#9ca3af"} size={20} /></button>
        //         <ToggleSwitch estado={producto.active } onToggleState={() => onToggle(producto.id)} />
        //     </div>
        //     )
        // }
    ];
    return columnasPedidos;
}