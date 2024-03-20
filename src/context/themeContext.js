import { createContext, useContext } from "react";

//creating context with some default values and states
export const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme: () => {},
})

//creating and exporting Provider
export const ThemeProvider = ThemeContext.Provider

//creating a custom hook to fetch and update data in store or context:
export default function useTheme(){
    return useContext(ThemeContext);
}