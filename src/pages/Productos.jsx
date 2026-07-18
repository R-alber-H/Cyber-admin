import { use, useState } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import FormularioProducto from '../components/Formulario_Producto';
import FormularioEditarProducto from '../components/FormularioEditarProducto';
import { crearColumnasProductos } from "../columns/columnsproducts"
import { useProduct } from '../hooks/useProduct';
import { HiPlus } from 'react-icons/hi';
import ModalImcrementarStock from '../components/ModalIncrementarStock';

export default function Productos() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const { productos, cargando, createProduct, updateProduct, deleteProduct,incrementarStock } = useProduct();
    const [ productoSeleccionado, setProductoSeleccionado]  = useState(null);
    const [ productoStock, setProductoStock ] = useState(null);

    const handleEditar = (producto) => {
        setProductoSeleccionado(producto);
        setModalAbierto(true);
    }

    const onIncrementar = (producto) => {
        setProductoStock(producto);
    }

    const columnasProductos = crearColumnasProductos(handleEditar, deleteProduct, onIncrementar);

    const closed = () => {
        setModalAbierto(false);
        setProductoSeleccionado(null);
    }
    const closedStock = () => setProductoStock(null)

    const onConfirmar = async (productoId, cantidad) => {
        try {
            await incrementarStock(productoId, cantidad);
            console.log("stock cambiado con éxito" );
        } catch (error) {
            console.error("Error al cambiar stock");
        }
    };

    return (
        <div>
            <div className="flex flex-row justify-between px-6 py-4 mb-2 py">
                <h3 className="text-3xl font-bold ">Productos</h3>
                <button
                    onClick={() => setModalAbierto(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 "
                >
                    <HiPlus size={18} />
                    Nuevo producto
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <Table columns={columnasProductos} data={productos} />
            </div>

            <Modal
                isOpen={modalAbierto}
                onClose={closed}
                title={productoSeleccionado ? "Editar Producto" : "Registrar Producto"}
            >
                {productoSeleccionado ? <FormularioEditarProducto onClose={closed} onUpdate={updateProduct} producto={productoSeleccionado} ></FormularioEditarProducto> :
                    <FormularioProducto onClose={() => setModalAbierto(false)} onCreate={createProduct}></FormularioProducto>}
            </Modal>
            {productoStock && <ModalImcrementarStock
            onClose={closedStock}
            onConfirmar={onConfirmar}
            producto={productoStock}
            >
                
            </ModalImcrementarStock>
            }
        </div>
    );
}