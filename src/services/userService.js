import api from "./Api"

export async function getUsers() {
    try {
        const response = await api.get("/users");
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}

export async function updateUser(id,data) {
    try {
        const response = await api.put(`/users/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}