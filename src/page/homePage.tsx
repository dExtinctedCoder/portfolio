import About from "../components/sections/about"
import Hero from "../components/sections/hero"
import Portfolio from "../components/sections/portfolio"
import Header from "../components/utilities/header"
import Experience from "../components/sections/experience"
import Testimonial from "../components/sections/testimonial"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage