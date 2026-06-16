import Table from "../components/Table";
import { useState } from 'react';
import FormularioUsuario from '../components/Formulario_Usuario';
import Modal from '../components/Modal';

export default function Usuarios() {
  const [modalAbierto, setModalAbierto] = useState(false);
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
      <div className="flex flex-row justify-between mb-5">
        <h3 className="text-3xl font-bold ">Usuarios</h3>
        <button
          onClick={() => setModalAbierto(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <Table columns={columnasUsuarios} data={listaUsuarios} />
      </div>
      <Modal
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        title="Registrar Usuario"
      >
        <FormularioUsuario />
      </Modal>
    </div>
  );
}
