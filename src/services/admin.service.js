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
        throw error.response?.data || "Error creating tour & travel user";
      }
}

export { GetAllData };