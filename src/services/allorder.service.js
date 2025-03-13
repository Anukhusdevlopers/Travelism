import api from "./api.service";


// signup service
export const allOrder = async () => {
    try {
        const response = await api.get(`/api/products/all-orders`, {
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            }
          });
      
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error creating tour & travel user";
    }
};

