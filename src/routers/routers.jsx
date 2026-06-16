import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Productos from "../pages/Productos";

export default function AppRouters(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route element={<MainLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/productos" element={<Productos/>} />
        </Route>
        </Routes>
    )
}