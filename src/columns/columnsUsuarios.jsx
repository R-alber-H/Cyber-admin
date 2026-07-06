
import { GrEdit } from "react-icons/gr";
import { ToggleSwitch } from "../components/ToggleSwitch";

export function crearColumnasUsuarios(onEditar) {
    const columnasUsuarios = [
        {
            header: "ID",
            accessor: "id",
            className: "w-16",
            render: (value) => <span className="font-mono text-gray-400">{value}</span>
        },
        {
            header: "Nombre",
            accessor: "name",
            render: (value) => <span className="font-medium text-gray-900">{value}</span>
        },
        {
            header: "Correo",
            accessor: "email",
            render: (value) => <span className="text-gray-500">{value}</span>
        },
        {
            header: "Dni",
            accessor: "dni",
            render: (value) => <span className="text-gray-500">{value? value : "No Indicado"}</span>
        },
        {
            header: "Telefono",
            accessor: "phone",
            render: (value) => <span className="text-gray-500">{value? value : "No Indicado"}</span>
        },
        {
            header: "Rol",
            accessor: "role",
            render: (value) => <span className="text-gray-500">{value.name}</span>
        },
         {
            header: "Accion",
            render: (usuario) => 
                <button onClick={() => onEditar(usuario)}><GrEdit color={"#2563eb"} size={20} /></button>
            
        }
    ];
    return columnasUsuarios;
}