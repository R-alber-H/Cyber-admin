import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Productos from "../pages/Productos";
import RutaPrivada from "./rutaPrivada";
import Pedidos from "../pages/Pedidos";
import NuevoPedido from "../pages/NuevoPedido";

export default function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<RutaPrivada />}>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/nuevo_pedido" element={<NuevoPedido />} />
                </Route>
            </Route>
        </Routes>
    )
}