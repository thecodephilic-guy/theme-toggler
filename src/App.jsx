import { useEffect, useState } from "react";
import CardUI from "./components/Card/CardUI";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/themeContext.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    if(themeMode === "dark"){
      setThemeMode("light");
    }else{
      setThemeMode("dark");
    }
  }

  //changing the actual theme:
  useEffect(() => {
    const htmlRef = document.querySelector('html').classList;
    htmlRef.remove("light", "dark")  ;
    htmlRef.add(themeMode);
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, toggleTheme}}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center gap-5">
            <div className="mt-5 flex items-center">
              <h1 className="mr-5 font-bold text-xl">Toggle Theme</h1>
              <ThemeButton />
            </div>
            <CardUI />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
