import { useState } from "react";
import { getEstadoActual, VALID_TRANSITIONS } from "../utils/pedidos_util";

export default function ModalCambiarEstado({ pedido, onClose, onConfirmar }) {
    const ultimoEstado = getEstadoActual(pedido?.status_history);
    const estadoActual = ultimoEstado?.state || "Recibido";
    const opcionesDisponibles = VALID_TRANSITIONS[estadoActual] || [];
    const [nuevoEstado, setNuevoEstado] = useState("");

    const handleConfirmar = () => {
        if (!nuevoEstado) return; 
        onConfirmar(pedido.id, nuevoEstado);
        onClose();
    };

    if (!pedido) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="px-5 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">Cambiar Estado</h3>
                    <p className="text-xs text-gray-500 mt-1">
                        Pedido ID: <span className="font-mono font-bold">{pedido.id}</span> • Estado actual: <span className="font-semibold text-blue-600">{estadoActual}</span>
                    </p>
                </div>

                <div className="p-5">
                    <div className="relative mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Selecciona el nuevo estado:
                        </label>
                        <select
                            name="estado"
                            value={nuevoEstado}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
                        >
                            <option value="">Seleccione estado</option>
                            {opcionesDisponibles.map((estado) => (
                                <option key={estado} value={estado}>
                                    {estado}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 pt-6 text-gray-500">
                            ▼
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 px-5 py-3 bg-gray-50 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200 focus:outline-none" 
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirmar}
                        disabled={!nuevoEstado}
                        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200 focus:outline-none ${
                            nuevoEstado 
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