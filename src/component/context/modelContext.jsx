// TokenContext.js
import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { login, register } from "../api/authApi";
// import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   

    // useEffect(() => {
    //     axios.interceptors.request.use(
    //         (config) => {
    //             // You can add additional headers if needed
    //             return config;
    //         },
    //         (error) => Promise.reject(error)
    //     );
    // }, []);


    // const loginUser = async (userData) => {
    //     const response = await login(userData);
    //     setUser(response.user);



    // };

    // const registerUser = async (userData) => {
    //     const response = await register(userData);
    //     setUser(response.user);
    // };

    // const logoutUser = async () => {
    //     await logout();
    //     setUser(null);
    // };

    return (
        <MyContext.Provider value={{
            user, setUser, 
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;
