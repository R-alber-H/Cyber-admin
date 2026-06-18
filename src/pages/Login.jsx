import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { sendOtp, verifyOtp, getMe } from "../services/authService"
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const { login } = useAuth();
   const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const mensaje = await sendOtp(email);
      console.log(mensaje); 
      setStep("code");
    } catch (error) {
      console.error(error)
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const token = await verifyOtp(email, code);
      localStorage.setItem("token", token);
      const datosUsuario = await getMe(); 
      login(token,datosUsuario);
      navigate("/dashboard");

    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Acceder</h1>
          <p className="mt-2 text-slate-500">{step === "email" ? "Ingresa tu correo para recibir un código." : "Revisa tu correo e ingresa el código recibido."}</p>
        </div>
        {step === "email" ? (
          <form onSubmit={handleSendCode} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
              <div className="relative"><MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com"
                  className="w-full border border-slate-300 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
              Enviar código
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Código de verificación</label>
              <div className="relative"> <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input type="text" maxLength={6} required value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456"
                  className="w-full border border-slate-300 rounded-lg pl-11 pr-4 py-3 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
            >
              Verificar e ingresar
            </button>
            <button type="button" onClick={() => setStep("email")} className="text-slate-600 hover:text-slate-800">
              Cambiar correo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}