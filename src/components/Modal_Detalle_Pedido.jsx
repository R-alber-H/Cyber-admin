
export default function ModalDetalle({pedido,onClose}){
    const productos = pedido.details
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Contenedor del Modal - Máximo ancho chico (max-w-md) */}
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Cabecera */}
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">
            Detalle del Pedido #{pedido.id}
          </h3>
        </div>

        {/* Contenido / Tabla */}
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-xs font-semibold uppercase text-gray-400 border-b border-gray-100">
                  <th className="py-2 text-left">Producto</th>
                  <th className="py-2 text-center">Cant.</th>
                  <th className="py-2 text-right">P. Unitario</th>
                  <th className="py-2 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {productos.map((producto, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-3 font-medium text-gray-900 max-w-45 truncate">
                      {producto.product.name}
                    </td>
                    <td className="py-3 text-center text-gray-500">
                      {producto.quantity}
                    </td>
                    <td className="py-3 text-right font-mono">
                      ${producto.unit_price.toFixed(2)}
                    </td>
                    <td className="py-3 text-center text-gray-500" >
                        {(producto.quantity * producto.unit_price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-200 font-semibold text-gray-950">
                  <td colSpan={3} className="py-3 text-left">Total</td>
                  <td className="py-3 text-right font-mono">${pedido.total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Footer con Botón Cerrar */}
        <div className="flex justify-end px-5 py-3 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}