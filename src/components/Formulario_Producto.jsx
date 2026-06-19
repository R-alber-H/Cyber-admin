import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { getBrands } from "../services/brand"
import { getCategory } from "../services/category";
import { getSuppliers } from "../services/suppliers";
import { craeteProduct } from "../services/productService"

export default function FormularioProducto() {
  const valor = ""
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    price: null,
    img_url: "",
    initial_stock: null,
    description: "sin descripcion",
    category_ids: [],
    brand_id: null,
    supplier_id: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const registrarCategorias = (e) => {
    const opcionesSeleccionadas = Array.from(
      e.target.selectedOptions, 
      (opcion) => opcion.value
    );
    setFormData({
      ...formData,
      category_ids: opcionesSeleccionadas,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await craeteProduct(formData)
      return response
    } catch (error) {
      console.error("Error:", error);
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
    {/* Campo: Nombre */}
    <div className="relative">
      <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese el nombre"
        className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
    </div>

    {/* Campo: Precio */}
    <div className="relative">
      <input type="text" required name="price" value={formData.price} onChange={handleChange} placeholder="Ingrese el precio"
        className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
    </div>

    {/* Campo: Stock */}
    <div className="relative">
      <input type="text" required name="initial_stock" value={formData.initial_stock} onChange={handleChange} placeholder="Ingrese el stock"
        className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
    </div>

    {/* Campo: URL Imagen */}
    <div className="relative">
      <input type="text" required name="img_url" value={formData.img_url} onChange={handleChange} placeholder="Ingrese la url de la imagen"
        className="w-full border mb-3 border-slate-300 rounded-lg pl-5 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
    </div>

    {/* Select: Marca */}
    <div className="relative mb-3">
      <select 
        name="brand_id" 
        value={formData.brand_id || ""} // Añadido para que sea controlado por tu estado
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
      {/* Icono de flecha personalizada */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    {/* Select Múltiple: Categorías */}
    <div className="mb-3">
      <label className="block text-sm font-medium text-slate-600 mb-1 pl-1">
        Seleccione categorías (Mantén presionado Ctrl / Cmd)
      </label>
      <select 
        multiple={true} 
        name="category_ids" 
        onChange={registrarCategorias}
        className="w-full border border-slate-300 rounded-lg p-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 overflow-y-auto cursor-pointer"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id} className="p-2 rounded-md checked:bg-blue-500 checked:text-white mb-1">
            {category.name}
          </option>
        ))}
      </select>
    </div>

    {/* Select: Proveedor */}
    <div className="relative mb-3">
      <select 
        name="supplier_id" 
        value={formData.supplier_id || ""} // Añadido para controlar el estado
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
      {/* Icono de flecha personalizada */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    {/* Botón */}
    <button type="submit" className="mt-4 w-full text-white px-4 py-3 rounded-lg bg-linear-to-r from-[#af6ab3] to-[#4968da] font-medium hover:opacity-90 transition-opacity cursor-pointer">
      Aceptar
    </button>
  </form>
);
}