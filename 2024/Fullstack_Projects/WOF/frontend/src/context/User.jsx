import { useState, useEffect, createContext, useContext} from "react";
import axios from "axios";
import { baseURL } from "../config/serverConfig";
import { CartContext } from "./Cart";

export const UserContext = createContext({});
export default function UserProvider({children}){
    const [user, setUser] = useState();
    const [token, setToken] = useState('');
    const {findCartByUserID, userCartID} = useContext(CartContext)

    const register = async(user) =>{
        try {
            const res = await axios.post(`${baseURL}/users/register`, {
                fullName: user.fullName,
                email: user.email,
                password: user.password
            });
            setUser(res.data.user);
            setToken(res.data.token);
            console.log('Register successful:', user);
            window.location.href = '/';
        } catch (error) {
            console.error("Failed to register:", error);
        }
    }

    const login = async(user) =>{
        try {
            const response = await axios.post(`${baseURL}/users/login`, {
                email: user.email,
                password: user.password
            });
            setUser(response.data.user);
            setToken(response.data.token);
            console.log('Login successful:', user);
            window.location.href = '/';
        } catch (error) {
            console.error("Failed to login:", error);
        }
    }

    const getUser = async(token) =>{
        try {
            const res = await axios.get(`${baseURL}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(user);
            setUser(res.data.user);
            findCartByUserID(res.data.user.id);
        } catch (error) {
            console.error("Failed to get user:", error);
        }
    }
    
    const signOut = () =>{
        setUser();
        setToken('');
        localStorage.setItem('token', '');
    }

    useEffect(() =>{
        if(token == ''){
            setToken(localStorage.getItem('token') ?? '');
        } else{
            localStorage.setItem('token', token);
        }
        getUser(token);
    },[token]);


    return (
        <UserContext.Provider value={{ user, setUser, getUser, token, setToken, register, login, signOut}}>
            {children}
        </UserContext.Provider>
    );
}