import api from "./api.service";

const SignUp = async (userData) => {
    try {
        const response = await api.post(`/api/products/create-user-tour-and-travel`, userData, {
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


export { SignUp };