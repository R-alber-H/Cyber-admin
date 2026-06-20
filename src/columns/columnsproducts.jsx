
export function crearColumnasProductos(){
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
            header: "Descripcion",
            accessor: "description",
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
            header: "Stock",
            accessor: "inventory",
            render: (value) => <span className="text-gray-500">{value.stock}</span>
        },
        {
            header: "Categorias",
            accessor: "product_categories",
            render: (value) => {
                  const nombres = value.map((v) => v.category.name).join(", ");
                  return <span className="text-gray-500">{nombres}</span>;
                    }
        },
    ];
    return columnasProductos;
}