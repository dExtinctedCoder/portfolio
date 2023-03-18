import Card from "../utilities/card"
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiRedux, SiBootstrap, SiReact, SiSass, SiJest, SiTypescript } from 'react-icons/si'

const About = () => {
  return (
    <section id="about__section"
      className="px-10 py-32 md:px-28"
    >
      <div className="mb-10 md:mb-24">
        <h2
          className="text-4xl mb-8 font-bold tracking-wider"
        >About</h2>
        <div className="flex items-start md:text-xl">
          <span className="w-2 h-20 mr-2 bg-purple dark:bg-green-light md:w-16 md:h-[3px] md:mt-1"></span>
          <div className=" max-w-[90ch]">
            <p className="mb-4 leading-6"><span className="text-purple font-medium dark:text-green-light">Solution-driven </span>Front End developer adept at contributing to highly collaborative work environment.</p>
            <p className="mb-4 leading-6">Built products for desktop and mobile app users over <span className="text-purple font-medium dark:text-green-light">2+ years</span>, meeting highest standards for web design, <span className="text-purple font-medium dark:text-green-light">user experience</span>, <span className="text-purple font-medium dark:text-green-light">best practices</span> and <span className="text-purple font-medium dark:text-green-light">speed</span>.</p>
            <p className="leading-6">Designed and developed web applications across multiple <span className="text-purple font-medium dark:text-green-light">API's</span>, third party integrations and databases.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl mb-8 font-bold tracking-wider">My Skills</h2>
        <div
          className="flex flex-wrap gap-8 justify-center items-center"
        >
          <Card Icon={SiTailwindcss} Title='Tailwind' />
          <Card Icon={SiHtml5} Title='Html5' />
          <Card Icon={SiJavascript} Title='Javascript' />
          <Card Icon={SiBootstrap} Title='Bootstrap' />
          <Card Icon={SiCss3} Title='Css3' />
          <Card Icon={SiRedux} Title='Redux' />
          <Card Icon={SiReact} Title='React' />
          <Card Icon={SiSass} Title='Sass' />
          <Card Icon={SiTypescript} Title='Typescript' />
        </div>
      </div>
    </section>
  )
}

export default About