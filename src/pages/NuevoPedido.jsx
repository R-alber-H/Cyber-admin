import { useState } from "react";
import { useProduct } from '../hooks/useProduct';
import { TiDelete } from "react-icons/ti";

export default function NuevoPedido() {

  const [productos, setProductos] = useState(
    Array(4).fill().map(() => ({
      id: crypto.randomUUID(),
      producto: "",
      cantidad: "0",
      precio: 0,
      idProducto: null,
    }))
  );

  const [delivery, setDelivery] = useState(false);
  const { productos: productosContexto } = useProduct();
  const productosDisponibles = productosContexto || [];

  const agregarFila = () => {
    setProductos([...productos, {id: crypto.randomUUID(), producto: "", cantidad: "0", precio: 0, idProducto: null }]);
  };

  const eliminarFila = (id) => {
    setProductos(productos.filter((item, i) => item.id !== id));
  };

  return (
    <div>
      <div className="flex flex-row justify-between px-6 py-4 mb-2">
        <h3 className="text-3xl font-bold">Nuevo Pedido</h3>
      </div>

      <datalist id="productos-list-general">
        {productosDisponibles.map((producto) => <option key={producto.id} value={producto.name} />)}
      </datalist>

      <div className="bg-white rounded-xl shadow overflow-hidden p-6">

        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap font-medium text-slate-700">
            Ingrese DNI del Cliente:
          </p>
          <input type="text" required placeholder="Ejm: 12345678"
            className="w-48 border border-slate-300 rounded-lg pl-5 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mt-5">
          <table className="w-full text-sm text-left text-gray-600 bg-white">

            <thead className="bg-gray-50/75 text-gray-900 font-medium uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-4 px-4">
                  <div className="flex items-center justify-between">
                    <span>Producto</span>
                    <span className="h-4 w-px bg-gray-400"></span>
                  </div>
                </th>

                <th className="py-4 px-4">
                  <div className="flex items-center justify-between">
                    <span>Cantidad</span>
                    <span className="h-4 w-px bg-gray-400"></span>
                  </div>
                </th>

                <th className="py-4 px-4">
                  <div className="flex items-center justify-between">
                    <span>Precio Unit</span>
                    <span className="h-4 w-px bg-gray-400"></span>
                  </div>
                </th>

                <th className="py-4 px-4">
                  <div className="flex items-center justify-between">
                    <span>Total(S/)</span>
                    <span className="h-4 w-px bg-gray-400"></span>
                  </div>
                </th>

                <th className="py-4 px-4">
                  <span></span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {productos.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-3 px-4 ">
                    <input
                      className=" text-gray-700border border-gray-200 rounded-lg px-3 py-2 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400"
                      type="text"
                      placeholder="Buscar producto..."
                      autoComplete="off"
                      list="productos-list-general"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input className="text-gray-500" type="number" min="0" />
                  </td>
                  <td className="py-3 px-4">
                    <input className="text-gray-500" type="number" readOnly />
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {((Number(item.cantidad) || 0) * (Number(item.precio) || 0)).toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button type="button"
                      className="inline-flex items-center justify-center p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-150"
                      onClick={() => eliminarFila(item.id)}
                    >
                      <TiDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mb-2 mt-6">
          <button type="button" className="px-4 py-2 text-xs font-normal text-gray-600 border border-gray-600 rounded hover:bg-gray-600 hover:text-white transition-colors duration-150" onClick={agregarFila}>Agregar fila</button>
          <h5 className="text-right text-lg font-semibold">Total: S/ </h5>
        </div>

        <div className="flex items-center gap-2 p-4">
          <input
            type="checkbox"
            checked={delivery}
            onChange={(e) => setDelivery(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded shrink-0"
          />
          <p className="whitespace-nowrap">Es Delivery</p>

          {delivery ? (
            <input
              type="text"
              required
              placeholder="Ingrese la Direccion"
              className="flex-1 border border-slate-300 rounded-lg pl-5 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="whitespace-nowrap font-medium text-blue-700">El recojo se realizará en la tienda</p>
          )}
        </div>
        <div className="flex justify-end p-4">
          <button type="button"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Registrar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}