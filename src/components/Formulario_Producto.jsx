import { MdEmail } from "react-icons/md";

export default function FormularioProducto(){
    const valor = ""
    return(
        <div>
            <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese el nombre"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese el precio"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese el stock"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese la url de la imagen"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese la categoria"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese la marca"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input type="text" required value={valor}  placeholder="Ingrese el proveedor"
                  className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            <button className="mt-4 w-100 text-white px-4 py-2 rounded bg-linear-to-r from-[#af6ab3] to-[#4968da]">Aceptar</button>
        </div>
    )
}