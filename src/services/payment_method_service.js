import api from "./Api";

export async function getPaymentMethod() {
    try {
        const response = await api.get("/payment_methods");
        return response.data;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
}