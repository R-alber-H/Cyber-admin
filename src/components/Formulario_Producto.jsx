import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { getBrands } from "../services/brand"
import { getCategory } from "../services/category";
import { getSuppliers } from "../services/suppliers";
import Select from 'react-select'

export default function FormularioProducto({ onClose , onCreate }) {
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [enviar, setEnviar] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img_url: "",
    initial_stock: "",
    description: "sin descripcion",
    category_ids: [],
    brand_id: null,
    supplier_id: null
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
      const response = await onCreate(formData)
      onClose()
      // return response
    } catch (error) {
      console.error("Error:", error);
      setEnviar(false)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const brands = await getBrands();
      const suppliers = await getSuppliers();
      const categories = await getCategory();
      setBrands(brands);
      setSuppliers(suppliers);
      setCategories(categories);
    };
    fetchData();
  }, []);

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

      <div className="relative">
        <input type="number" required name="initial_stock" value={formData.initial_stock} onChange={handleChange} placeholder="Ingrese el stock"
          className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      <div className="relative">
        <input type="text" required name="img_url" value={formData.img_url} onChange={handleChange} placeholder="Ingrese la url de la imagen"
          className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      <div className="relative mb-3">
        <select
          name="brand_id"
          value={formData.brand_id || ""}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg pl-5 pr-10 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
        >
          <option value="">Seleccione marca</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>

      <div className="mb-3">
        <Select
          isMulti
          options={categories.map(c => ({ value: c.id, label: c.name }))}
          placeholder="Selecciona categoria"
          onChange={(seleccionadas) => {
            const ids = seleccionadas.map((s) => s.value);
            setFormData({
              ...formData,
              category_ids: ids,
            });
          }}
        />
      </div>

      <div className="relative mb-3">
        <select
          name="supplier_id"
          value={formData.supplier_id || ""}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg pl-5 pr-10 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
        >
          <option value="">Seleccione proveedor</option>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>

      <button type="submit" disabled={enviar} className="mt-4 w-full text-white px-4 py-3 rounded-lg bg-linear-to-r from-[#af6ab3] to-[#4968da] font-medium hover:opacity-90 transition-opacity cursor-pointer">
        Registrar
      </button>
    </form>
  );
}