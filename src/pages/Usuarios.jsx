export default function Usuarios() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Usuarios
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Nombre</th>
              <th className="p-4 text-left">Correo</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">1</td>
              <td className="p-4">Juan Pérez</td>
              <td className="p-4">juan@mail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}