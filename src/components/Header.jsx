import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-slate-800">
          Sistema de Gestión
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-slate-600" />
          <span className="text-sm font-medium text-slate-700">
            Juan Pérez
          </span>
        </div>

        <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
          <FaSignOutAlt />
          Salir
        </button>
      </div>
    </header>
  );
}