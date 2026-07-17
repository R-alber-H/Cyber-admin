const UMBRAL_BAJO = 5;
const UMBRAL_MEDIO = 15;

export function getNivelStock(stock) {
    let nivel = "";
    if (stock <= UMBRAL_BAJO){
        nivel = "bajo";
    }else if (UMBRAL_BAJO <= stock && stock <= UMBRAL_MEDIO){
        nivel = "medio";
    }else{
        nivel = "normal"
    }
  return nivel
}

export const ESTILOS_NIVEL = {
    'bajo': 'bg-red-100 text-red-800 border border-red-200',
    'medio': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    'normal': 'bg-gray-100 text-gray-800 border border-gray-200',
    'default': 'bg-gray-100 text-gray-800 border border-gray-200'
};