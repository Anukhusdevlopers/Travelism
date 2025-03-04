import api from "./api.service";

const GetAllData = async () => {
    try {
        const response = await api.get("/api/products/create-user-tour-and-travel", {
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });
        return response.data
      } catch (error) {
        throw error.response?.data || "Error fetching tour & travel user";
      }
}

const GetAllContactRequests = async () => {
  try {
    const response = await api.get("/api/products/contact-us")
    return response.data
  }catch(error) {
    throw error.response?.data || "Error fetching contact requests";
  }
}

export { GetAllData, GetAllContactRequests };