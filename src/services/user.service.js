import api from "./api.service";


// signup service
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

// contact service
const ContactService = async (contactData) => {
    try {
      const response = await api.post(`/api/products/contact-us`, contactData, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        }
      })
      return response.data
    } catch (error) {
      throw error.response?.data || "Some Error occured";
    }
}


export { SignUp, ContactService };