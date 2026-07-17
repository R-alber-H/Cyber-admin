import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { logout, usuario } = useAuth();
  const navigate = useNavigate();

  const cerrarSeccion = () => {
    logout();
    navigate("/login");
  }

  return (
    <header className="h-16 bg-white px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-slate-800">
          Bienvenido de nuevo
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-slate-600" />
          <span className="text-sm font-medium text-slate-700">{usuario.name}</span>
        </div>
        <button 
        onClick={cerrarSeccion}
        className="flex items-center gap-2 text-red-600 hover:text-red-700">
          <FaSignOutAlt />Salir</button>
      </div>
    </header>
  );
}