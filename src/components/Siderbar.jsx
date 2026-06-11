import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="h-16 flex items-center px-6 border-b border-slate-700">
        <h2 className="text-lg font-bold">
          Mi Sistema
        </h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              <FaHome />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/usuarios"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              <FaUsers />
              Usuarios
            </Link>
          </li>

          <li>
            <Link
              to="/configuracion"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              <FaCog />
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}