import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "../context/Theme";
import ProductCard from "./ProductCard";

export default function Test(){
    const {isDarkMode, selectedTheme, toggleTheme} = useContext(ThemeContext);
    console.log(isDarkMode);

    return (
        <div style={{...selectedTheme}}>
            <h1>Test</h1>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}