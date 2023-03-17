import About from "../components/sections/about"
import Hero from "../components/sections/hero"
import Portfolio from "../components/sections/portfolio"
import Header from "../components/utilities/header"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  )
}

export default HomePage