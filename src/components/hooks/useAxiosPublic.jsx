import axios from "axios";

const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: "https://japan-learn-server.vercel.app",
    });

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return instance;
};

export default useAxiosPublic;
