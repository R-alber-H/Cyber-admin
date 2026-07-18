
import { GrEdit } from "react-icons/gr";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { getNivelStock, ESTILOS_NIVEL } from "../utils/inventario_util";

export function crearColumnasProductos(onEditar, onToggle, onIncrementar) {
  const columnasProductos = [
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
      header: "Precio",
      accessor: "price",
      render: (value) => <span className="text-gray-500">{value}</span>
    },
    {
      header: "Marca",
      accessor: "brand",
      render: (value) => <span className="text-gray-500">{value.name}</span>
    },
    {
      header: "Provedor",
      accessor: "supplier",
      render: (value) => <span className="text-gray-500">{value.name}</span>
    },
    {
      header: "Categorias",
      accessor: "product_categories",
      render: (value) => {
        const nombres = value.map((v) => v.category.name).join(", ");
        return <span className="text-gray-500 bg">{nombres}</span>;
      }
    },
    {
      header: "Stock",
      render: (producto) => {
        const estaActivo = producto.active;

        return (
          <span
            onClick={() => estaActivo && onIncrementar(producto)}
            className={`inline-block px-3 py-1 rounded-md font-medium transition-all duration-200 shadow-sm ${estaActivo
              ? "text-gray-700 bg-gray-100 cursor-pointer hover:bg-blue-600 hover:text-white"
              : "text-gray-400 bg-gray-200 cursor-not-allowed opacity-60"
              }`}
          >
            {producto.inventory.stock}
          </span>
        );
      }
    },
    {
      header: "Nivel Stock",
      render: (producto) => {
        const nivel = getNivelStock(producto.inventory.stock)
        const clasesColor = ESTILOS_NIVEL[nivel] || ESTILOS_NIVEL['default'];
        return (
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${clasesColor}`}>{nivel}</span>
        )
      }
    },
    {
      header: "Accion",
      render: (producto) => (<div className="w-24 flex gap-4 items-center">
        <button
          disabled={!producto.active}
          onClick={() => onEditar(producto)}
          className={`p-1.5 rounded-md transition-all duration-200 ${producto.active
            ? "cursor-pointer hover:bg-blue-50"
            : "cursor-not-allowed opacity-50"
            }`}
        >
          <GrEdit color={producto.active ? "#2563eb" : "#9ca3af"} size={20} />
        </button>
        <ToggleSwitch estado={producto.active} onToggleState={() => onToggle(producto.id)} />
      </div>
      )
    }
  ];
  return columnasProductos;
}