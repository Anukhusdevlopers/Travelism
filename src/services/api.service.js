    import axios from "axios";

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL, // Change this to your API URL
        timeout: 10000, // 10 seconds timeout
        headers: {
            "Content-Type": "application/json",
        },
    });

    export default api