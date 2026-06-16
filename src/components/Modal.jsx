
export default function Modal({ isOpen, onClose, title, children }) {
  // Si no está abierto, no renderiza nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* Capa de fondo para cerrar al hacer click fuera */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Contenedor del Modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        
        {/* Cabecera */}
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Contenido (Aquí entra lo que le metas dentro) */}
        <div className="mt-4">
          {children}
        </div>

      </div>
    </div>
  );
}