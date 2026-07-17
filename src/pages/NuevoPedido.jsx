import { useState, useEffect } from "react";
import { useProduct } from '../hooks/useProduct';
import { TiDelete } from "react-icons/ti";
import { getPaymentMethod } from "../services/payment_method_service";
import {create } from "../services/pedidosService"

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

  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [delivery, setDelivery] = useState(false);
  const { productos: productosContexto } = useProduct();
  const productosDisponibles = productosContexto || [];
  const [metodosPago, setMetodosPago] = useState([]);
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const metodos = await getPaymentMethod();
      console.log(metodos);
      setMetodosPago(metodos);
    };
    fetchData();
  }, []);

  const agregarFila = () => {
    setProductos([...productos, { id: crypto.randomUUID(), producto: "", cantidad: "0", precio: 0, idProducto: null }]);
  };

  const eliminarFila = (id) => {
    setProductos(productos.filter((item, i) => item.id !== id));
  };

  const handleProductoChange = (id, valor) => {
    setProductos((prevProductos) =>
      prevProductos.map((item) =>
        item.id === id
          ? { ...item, producto: valor, precio: 0, idProducto: null }
          : item
      )
    );
  };

  const handleProductoBlur = (id, valor) => {
    const producto = productosDisponibles.find((p) => p.name === valor);
    if (producto) {
      setProductos((prevProductos) =>
        prevProductos.map((item) =>
          item.id === id
            ? { ...item, producto: valor, precio: producto.price, idProducto: producto.id }
            : item
        )
      );
    }
  };

  const handleCantidad = (id, valor) => {
    setProductos((prevProductos) =>
      prevProductos.map((item) =>
        item.id === id
          ? { ...item, cantidad: valor }
          : item
      )
    );
  };

  const calcularTotal = () => {
    return productos.reduce((acc, item) => {
      const cantidad = Number(item.cantidad) || 0;
      const precio = Number(item.precio) || 0;
      const subtotal = cantidad * precio ;
      return acc + subtotal;
    }, 0);
  };

  const guardarPedido = async () => {
    const details = productos
      .filter((item) => item.idProducto && Number(item.cantidad) > 0)
      .map((item) => ({
        product_id: item.idProducto,
        quantity: Number(item.cantidad),
      }));

    const customer ={
      name : nombre,
      dni : dni,
      email : email,
    };

    const pedido = {
      customer,
      details,
      payment_method_id: Number(metodoPago),
      is_delivery: delivery,
      delivery_address: direccion,
    };

    await create(pedido)
    console.log("Pedido registrado")
  }

  return (
    <div>
      <div className="flex flex-row justify-between px-6 py-4 mb-2">
        <h3 className="text-3xl font-bold">Nuevo Pedido</h3>
      </div>

      <datalist id="productos-list-general">
        {productosDisponibles.map((producto) => <option key={producto.id} value={producto.name} />)}
      </datalist>

      <div className="bg-white rounded-xl shadow overflow-hidden p-6">

        <div className="flex flex-wrap items-end gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cliente_dni" className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              DNI del Cliente
            </label>
            <input
              type="text"
              id="cliente_dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              placeholder="Ejm: 12345678"
              className="w-40 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div className="flex flex-col gap-1.5 flex-1 min-w-50">
            <label htmlFor="cliente_nombre" className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              Nombre Completo
            </label>
            <input
              type="text"
              id="cliente_nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Ejm: Juan Pérez"
              className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div className="flex flex-col gap-1.5 flex-1 min-w-55">
            <label htmlFor="cliente_email" className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="cliente_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ejm: juan@correo.com"
              className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
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
                    <input value={item.producto} onChange={(e) => handleProductoChange(item.id, e.target.value)} onBlur={(e) =>handleProductoBlur(item.id,e.target.value)}
                      className=" text-gray-700border border-gray-200 rounded-lg px-3 py-2 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400"
                      type="text"
                      placeholder="Buscar producto..."
                      autoComplete="off"
                      list="productos-list-general"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input value={item.cantidad} onChange={(e) => handleCantidad(item.id, e.target.value)} className="text-gray-500" type="number" min="0" />
                  </td>
                  <td className="py-3 px-4">
                    <input value={item.precio} className="text-gray-500" type="number" readOnly />
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
          <button type="button" className="ml-2 px-4 py-2 text-xs font-normal text-gray-600 border border-gray-600 rounded hover:bg-gray-600 hover:text-white transition-colors duration-150" onClick={agregarFila}>Agregar fila</button>
          <h5 className="text-right text-lg font-semibold">Total: S/ {calcularTotal().toFixed(2)}</h5>
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
            <input value={direccion} onChange={(e) => setDireccion(e.target.value)}
              type="text"
              required
              placeholder="Ingrese la Direccion"
              className="flex-1 border border-slate-300 rounded-lg pl-5 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="whitespace-nowrap font-medium text-blue-700">El recojo se realizará en la tienda</p>
          )}
        </div>

        <div className="flex items-center gap-4 mb-3">
          <label htmlFor="method_id" className="text-slate-700 ml-4 font-medium whitespace-nowrap">
            Método de Pago:
          </label>
          <div className="relative">
            <select value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}
              id="method_id"
              name="method_id"
              className="w-72 border border-slate-300 rounded-lg pl-5 pr-10 py-2 bg-white text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
            >
              <option value="">Seleccione metodo pago</option>
              {metodosPago.map((metodo) => (
                <option key={metodo.id} value={metodo.id}>
                  {metodo.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end p-4">
          <button type="button" onClick={guardarPedido}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Registrar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}