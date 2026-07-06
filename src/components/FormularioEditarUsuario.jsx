import { useState } from "react";

export default function FormularioEditarUsuario({onClosed ,usuario, onUpdate}){
      const [enviar, setEnviar] = useState(false);
        console.log(usuario)
      const [formData, setFormData] = useState({
        name: usuario.name,
        phone: usuario.phone || "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const validacion = true
          setEnviar(validacion)
          const response = await onUpdate(usuario.id,formData)
          onClosed()
        } catch (error) {
          console.error("Error:", error);
          setEnviar(false)
        }
      };
    return(
         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <div className="relative">
                <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese el nombre"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required name="phone" value={formData.phone} onChange={handleChange} placeholder="Ingrese telefono"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> 
            <button type="submit" className="mt-4 w-100 text-white px-4 py-2 rounded bg-linear-to-r from-[#af6ab3] to-[#4968da]">Aceptar</button>
       </form>
    )
}