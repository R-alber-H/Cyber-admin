import { useState } from "react"

export default function ModalImcrementarStock({ producto, onClose, onConfirmar }) {
  const [cantidad, setCantidad] = useState(0);

  const handleConfirmar = () => {
    if (!(cantidad > 0)) return; 
    onConfirmar(producto.id, Number(cantidad)); 
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-150">

        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Incrementar Stock</h3>
          <p className="text-xs text-gray-500 mt-1">
            Producto: <span className="font-mono font-bold">{producto.name}</span> • stock actual: <span className="font-semibold text-blue-600">{producto.inventory.stock}</span>
          </p>
        </div>

        <div className="p-5">
          <div className="relative mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ingrese la cantidad:</label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="number" 
              min="0" 
              value={cantidad} 
              onChange={(e) => setCantidad(e.target.value)} 
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 px-5 py-3 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200 focus:outline-none"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmar}
            disabled={!(cantidad > 0)}
            type="button"
            className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200 focus:outline-none ${
              cantidad > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Confirmar
          </button>
        </div>
      </div> 
    </div>
  );
}