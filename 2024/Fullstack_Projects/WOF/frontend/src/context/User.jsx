import { useState, useEffect, createContext} from "react";
import axios from "axios";
import { baseURL } from "../config/serverUrl";

export const UserContext = createContext({});
export default function UserProvider({children}){
    const [user, setUser] = useState();
    const [token, setToken] = useState('');

    const register = async(user) =>{
        try {
            const res = await axios.post(`${baseURL}/users/register`,
            {
              fullName: user.fullName,
              email: user.email,
              password: user.password
            })
            setUser(res.data.user);
            setToken(res.data.token);
            console.log('Register successful:', user);
        } catch (error) {
            console.error("Failed to register:", error);
        }
    }

    const login = async(user) =>{
        try {
            const response = await axios.post(`${baseURL}/users/users/login`, {
                email: user.email,
                password: user.password
            });
            console.log(response);
            setUser(response.data.user);
            setToken(response.data.token);
            console.log('Login successful:', user);
        } catch (error) {
            console.error("Failed to login:", error);
        }
    }
    
    useEffect(() =>{
        if(token == ''){
            setToken(localStorage.getItem('token') ?? '');
        } else{
            localStorage.setItem('token', token);
        }
    },[token]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, register, login}}>
            {children}
        </UserContext.Provider>
    );
}