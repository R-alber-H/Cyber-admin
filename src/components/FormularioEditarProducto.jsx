import {  useState } from "react";

export default function FormularioEditarProducto({ onClose ,producto,onUpdate}) {
  const [enviar, setEnviar] = useState(false);

  const [formData, setFormData] = useState({
    name: producto.name,
    price: producto.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let valorFinal = value;
    if (name === "price" || name === "initial_stock") {
      valorFinal = value === "" ? "" : Number(value);
    }

    setFormData({
      ...formData,
      [name]: valorFinal,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const validacion = true
      setEnviar(validacion)
      const response = await onUpdate(producto.id,formData)
      onClose()
    } catch (error) {
      console.error("Error:", error);
      setEnviar(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="relative">
        <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese el nombre"
          className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      <div className="relative">
        <input type="number" required name="price" value={formData.price} onChange={handleChange} placeholder="Ingrese el precio"
          className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      <button type="submit" disabled={enviar} className="mt-4 w-full text-white px-4 py-3 rounded-lg bg-linear-to-r from-[#af6ab3] to-[#4968da] font-medium hover:opacity-90 transition-opacity cursor-pointer">
        Aceptar
      </button>
    </form>
  );
}