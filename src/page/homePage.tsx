import About from "../components/sections/about"
import Hero from "../components/sections/hero"
import Portfolio from "../components/sections/portfolio"
import Header from "../components/utilities/header"
import Experience from "../components/sections/experience"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default HomePage