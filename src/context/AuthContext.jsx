import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("usuario");

        if (savedToken) setToken(savedToken);
        if (savedUser) setUsuario(JSON.parse(savedUser));

        setCargando(false);
    }, []);

    function login(token, datosUsuario) {
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify(datosUsuario));

        setToken(token);
        setUsuario(datosUsuario);
    }

    function logout() {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{ usuario, token, cargando, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}