import api from "./api";

export async function getSuppliers() {
    try {
        const response = await api.get("/suppliers")
        return response.data
    } catch (error) {
        console.error("Error:",error.response?.data || error.message)
        throw error
    }
}