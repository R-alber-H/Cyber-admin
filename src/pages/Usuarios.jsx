import Table from "../components/Table";
import { useState } from 'react';
import FormularioUsuario from '../components/Formulario_Usuario';
import Modal from '../components/Modal';
import { useUser } from "../hooks/useUser";
import { crearColumnasUsuarios } from "../columns/columnsUsuarios";
import FormularioEditarUsuario from "../components/FormularioEditarUsuario";

export default function Usuarios() {

  const { usuarios, cargando, cargarUsuarios, actualizarUsuarios } = useUser();
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const handleEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setModalAbierto(true);
  }

  const columnasUsuarios = crearColumnasUsuarios(handleEditar);

  return (
    <div>
      <div className="flex flex-row justify-between px-6 py-4 mb-2">
        <h3 className="text-3xl font-bold ">Usuarios</h3>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <Table columns={columnasUsuarios} data={usuarios} />
      </div>
      <Modal
        isOpen={modalAbierto}
        onClosed={() => setModalAbierto(false)}
        title={"Editar Usuario"}
      >
        <FormularioEditarUsuario onClosed={() => setModalAbierto(false)} onUpdate ={actualizarUsuarios} usuario ={usuarioSeleccionado}/>
      </Modal>
    </div>
  );
}
