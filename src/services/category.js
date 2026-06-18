import api from "./api";

export async function getCategory() {
    try {
        const response = await api.get("/categories")
        return response.data
    } catch (error) {
        console.error("Error:",error.response?.data || error.message);
        throw error;
    }
}