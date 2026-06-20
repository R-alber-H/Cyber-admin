import { useState } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import FormularioProducto from '../components/Formulario_Producto';
import { crearColumnasProductos } from "../columns/columnsproducts"
import { useProduct } from '../hooks/useProduct';


export default function Productos() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const { productos, cargando, createProduct } = useProduct();
    const columnasProductos = crearColumnasProductos();

    return (
        <div>
            <div className="flex flex-row justify-between px-6 py-4 mb-2 py">
                 <h3 className="text-3xl font-bold ">Productos</h3>
            <button
                onClick={() => setModalAbierto(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Nuevo producto
            </button>
            </div>
           
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <Table columns={columnasProductos} data={productos} />
            </div>
            <Modal
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
                title="Registrar Producto"
            >
                <FormularioProducto onClose={() => setModalAbierto(false)} onCreate={createProduct} />
            </Modal>
        </div>
    );
}