
export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm text-left text-gray-600 bg-white">
        
        <thead className="bg-gray-50/75 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                className={`p-4 font-semibold ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center text-gray-400">
                No hay datos disponibles.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr 
                key={row.id || rowIndex} 
                className="hover:bg-blue-50/40 transition-colors duration-150"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-4">
                    {column.render 
                      ? column.render(row[column.accessor], row) 
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}