import api from "./api";

export async function getProduct() {
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function craeteProduct(data) {
    try {
        const response = await api.post("/products", data)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }

}