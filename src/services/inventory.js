import api from "./api";

export async function incrementar(id,quantity){
    const StockIncrement ={ quantity: quantity };
    try {
        const response = await api.patch(`/inventory/${id}`,StockIncrement )
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}