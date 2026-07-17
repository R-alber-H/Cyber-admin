
export const VALID_TRANSITIONS = {
    "Recibido": ["Enviado", "Entregado", "Cancelado"],
    "Enviado": ["Entregado", "Cancelado"],
    "Entregado": [],
    "Cancelado": [],
};

export const ESTILOS_ESTADO = {
    'Cancelado': 'bg-red-100 text-red-800 border border-red-200',
    'Enviado': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Recibido': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    'Entregado': 'bg-green-100 text-green-800 border border-green-200',
    'default': 'bg-gray-100 text-gray-800 border border-gray-200'
};

export const getEstadoActual = (history) => {
    if (!history || history.length === 0) return null;
    return history.reduce((masReciente, actual) => {
        const fechaMasReciente = new Date(masReciente.create_at);
        const fechaActual = new Date(actual.create_at);
        return fechaActual > fechaMasReciente ? actual : masReciente;
    }, history[0]);
};