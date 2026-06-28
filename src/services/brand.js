import api from "./api";

export async function getBrands() {
    try {
    const response = await api.get("/brands");
    return response.data;
    } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
}
}