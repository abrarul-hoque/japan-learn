import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const registerUser = async (name, email, password, photo) => {
        try {
            const response = await axiosPublic.post("/register", {
                name,
                email,
                password,
                photo,
            });
            const userData = response.data;
            localStorage.setItem("access-token", userData.token);
            setUser(userData.user);
            return userData;
        } catch (error) {
            console.error("Registration Error:", error);
            throw error;
        }
    };

    const loginUser = async (email, password) => {
        try {
            const response = await axiosPublic.post("/login", { email, password });
            const userData = response.data;
            localStorage.setItem("access-token", userData.token);
            setUser(userData.user);
            return userData;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    };

    const logOut = () => {
        localStorage.removeItem("access-token");
        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        if (token) {
            axiosPublic
                .get("/me", { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => setUser(res.data.user))
                .catch(() => {
                    localStorage.removeItem("access-token");
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        logOut,
    };

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
