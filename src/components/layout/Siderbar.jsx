import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";
import avatar from "../../assets/avatar.png"

export default function Sidebar() {
  const baseLinkClass = "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group";

  return (
    <div className="w-64 min-h-screen bg-[#162D56] border-r border-zinc-800 text-zinc-400 flex flex-col justify-between p-4 selection:bg-orange-500/30">

      <div>
        <div className="h-30 flex items-center px-4 mb-6">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <img
              src={avatar}
              alt="Cyber SAC Logo"
              className="h-30 w-auto object-contain mb-1.5"
            />
          </div>
        </div>

        <nav>
          <ul className="space-y-5">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive
                    ? "bg-linear-to-r from-orange-500/10 to-transparent text-white font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FaHome className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-white"}`} />
                    <span>Dashboard</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-glow" />}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/usuarios"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive
                    ? "bg-linear-to-r from-orange-500/10 to-transparent text-white font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FaUsers className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-white"}`} />
                    <span>Usuarios</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-glow" />}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive
                    ? "bg-linear-to-r from-orange-500/10 to-transparent text-white font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FaCubes className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-white"}`} />
                    <span>Productos</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-glow" />}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/configuracion"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive
                    ? "bg-linear-to-r from-orange-500/10 to-transparent text-orange-500 font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FaCog className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-orange-500" : "text-zinc-500 group-hover:text-white"}`} />
                    <span>Configuración</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-glow" />}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/configuracion"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive
                    ? "bg-linear-to-r from-orange-500/10 to-transparent text-orange-500 font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:font-bold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FaCog className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-orange-500" : "text-zinc-500 group-hover:text-white"}`} />
                    <span>Configuración</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-glow" />}
                  </>
                )}
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>

      <div className=" pt-4 mt-auto">
        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-900/30 transition-colors group/user">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-semibold text-sm text-white">
              US
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-200 group-hover/user:text-white transition-colors">Usuario Admin</span>
              <span className="text-xs text-zinc-500">admin@cybersac.com</span>
            </div>
          </div>
          <button className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-all cursor-pointer" title="Cerrar Sesión">
            <FaSignOutAlt className="text-md" />
          </button>
        </div>
      </div>

    </div>
  );
}