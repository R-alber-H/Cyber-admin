import { useState } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import FormularioProducto from '../components/Formulario_Producto';
import FormularioEditarProducto from '../components/FormularioEditarProducto';
import { crearColumnasProductos } from "../columns/columnsproducts"
import { useProduct } from '../hooks/useProduct';


export default function Productos() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const { productos, cargando, createProduct, updateProduct } = useProduct();
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const handleEditar = (producto) =>{
        setProductoSeleccionado(producto);
        setModalAbierto(true);
    }

    const columnasProductos = crearColumnasProductos(handleEditar);

    const closed =() => {
        setModalAbierto(false);
        setProductoSeleccionado(null);
    }

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
                onClose={closed}
                title={productoSeleccionado? "Editar Producto" : "Registrar Producto"}   
            >
                {productoSeleccionado? <FormularioEditarProducto onClose={closed} onUpdate ={updateProduct} producto = {productoSeleccionado} ></FormularioEditarProducto> : 
                <FormularioProducto onClose={() => setModalAbierto(false)}  onCreate={createProduct}></FormularioProducto>}
            </Modal>
        </div>
    );
}