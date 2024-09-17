import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3002",
});

axiosInstance.interceptors.request.use(
    function (config) {
        if ((config?.headers as {Authorization: string})?.Authorization?.includes("Bearer")) {
            return config;
        }

        if (localStorage.getItem("pride-driver")) {
            const { token } = JSON.parse(localStorage.getItem("pride-driver") as string);
            (config.headers as {Authorization: string}).Authorization = `Bearer ${token}`;
            return config;
        }

        // This will throw 401 error
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status == 401 && !window.location.pathname.includes('/auth')) {
            window.location.href = "/auth";
            return;
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;