import { useState, useEffect, createContext} from "react";
import { axios } from "axios";

export const UserContext = createContext({});
export default function UserProvider(){
    const [user, setUser] = useState();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:2000/users');
                setUser(response.data); 
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser(); 
    }, []);
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}