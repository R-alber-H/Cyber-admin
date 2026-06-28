import { useEffect, useState } from "react";
import { getUsers, updateUser } from "../services/userService"

export function useUser() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);

    const cargarUsuarios = async () => {
        setCargando(true);
        try {
            const data = await getUsers()
            setUsuarios(Array.isArray(data) ? data.filter(u => u.role.name !== "cliente") : []);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw error;
        } finally {
            setCargando(false)
        }
    }
    useEffect(() => {
        cargarUsuarios()
    }, [])

    const actualizarUsuarios = async (id, data) => {
        try {
            const response = await updateUser(id, data)
            setUsuarios(prev => prev.map(u => u.id === id ? response : u))
        } catch (error) {
            console.error("Error al actualizar datos del usuario:", error);
            throw error;
        }
    }

    return {
        usuarios,
        cargando,
        cargarUsuarios,
        actualizarUsuarios,
    }
}