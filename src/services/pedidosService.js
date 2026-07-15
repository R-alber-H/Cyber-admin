import api from "./api";

export async function get() {
    try {
        const response = await api.get("/orders");
        return response.data;
    } catch (error) {
         console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function create(data) {
    try {
        const response = await api.post("/orders", data)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}