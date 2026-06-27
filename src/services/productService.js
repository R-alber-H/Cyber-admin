import api from "./api";

export async function get() {
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function craete(data) {
    try {
        const response = await api.post("/products", data)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function update(id, data) {
    try {
        const response = await api.put(`/products/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function toggleStatus(id) {
    try {
        const response = await api.delete(`/products/${id}`)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}