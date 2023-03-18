import About from "../components/sections/about"
import Hero from "../components/sections/hero"
import Portfolio from "../components/sections/portfolio"
import Header from "../components/utilities/header"
import Experience from "../components/sections/experience"
import Testimonial from "../components/sections/testimonial"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonial />
    </div>
  )
}

export default HomePage