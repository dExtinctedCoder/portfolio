import { useEffect } from "react"
import HomePage from "./page/homePage";
import { useAppSelector } from "./store/hooks";

function App() {

  const theme = useAppSelector((state: any) => state.ThemeReducer.currentTheme)
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme!)
  }, [theme])


  return (
    <div className={`bg-green-light overflow-x-hidden text-black min-h-screen dark:bg-black dark:text-white`}>
      <HomePage />
    </div>
  )
}

export default App
