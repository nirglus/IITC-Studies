import { createContext , useState} from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useState(true);
    const darkModeColors = {
        background: "black",
        color:"white"
    }
    const lightModeColors ={
        background: "white", 
        color: "black"
    }

    const [selectedTheme, setSelectedTheme] = useState();

    const toggleTheme = () =>{
        if(isDarkMode){
            setSelectedTheme(lightModeColors);
        } else{
            setSelectedTheme(darkModeColors);
        }
        setIsDarkMode(!isDarkMode);
        }
    
    return (
        <ThemeContext.Provider value ={{toggleTheme, isDarkMode, selectedTheme}}>
        {children}
        </ThemeContext.Provider>
    )

}