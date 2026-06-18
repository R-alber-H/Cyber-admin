import api from "./api";

export async function sendOtp(email) {
  try {
    const response = await api.post("/auth/send-otp", { email });
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
}

export async function verifyOtp(email, code) {
    try {
        const response = await api.post("/auth/verify-otp", {
            email: email,
            code:code
        });
        return response.data
    } catch (error) {
        console.error(" Error: ", error.response?.data || error.message);
        throw error;
    }
}

export async function getMe() {
    try {
        const response = await api.get("/auth/me", {
        });
        return response.data
    } catch (error) {
        console.error(" Error: ", error.response?.data || error.message);
        throw error;
    }
}