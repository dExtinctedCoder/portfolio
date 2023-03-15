import { useState, createContext, useEffect } from "react"
import HomePage from "./page/homePage";

export const ThemeContext = createContext({} as any)
function App() {

  const storedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
  const [theme, setTheme] = useState(storedTheme)
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(storedTheme!)
  }, [storedTheme])
  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`bg-white text-black min-h-screen dark:bg-black dark:text-white`}>
        <HomePage />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
