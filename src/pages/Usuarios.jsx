import Table from "../components/Table";

export default function Usuarios() {
  const columnasUsuarios = [
    { 
      header: "ID", 
      accessor: "id", 
      className: "w-16",
      render: (value) => <span className="font-mono text-gray-400">{value}</span> 
    },
    { 
      header: "Nombre", 
      accessor: "nombre",
      render: (value) => <span className="font-medium text-gray-900">{value}</span>
    },
    { 
      header: "Correo", 
      accessor: "correo",
      render: (value) => <span className="text-gray-500">{value}</span>
    },
  ];

  const listaUsuarios = [
    { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com" },
    { id: 2, nombre: "María Gomez", correo: "maria@mail.com" },
    { id: 3, nombre: "Carlos Días", correo: "carlos@mail.com" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Usuarios</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <Table columns={columnasUsuarios} data={listaUsuarios} />
      </div>
    </div>
  );
}
