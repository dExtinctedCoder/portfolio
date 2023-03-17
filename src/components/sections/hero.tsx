import { HashLink as Link } from "react-router-hash-link"
import { useAppSelector } from "../../store/hooks"
import Header from "../utilities/header"

const Hero = () => {

  const theme = useAppSelector(state => state.ThemeReducer.currentTheme)

  return (
    <section 
      aria-label='hero__section'
      className=''
    >
      <Header />
      <div className="py-24 pb-40 px-8 relative md:px-16 lg:px-24 lg:pb-48">
        <div className="flex items-center">
          <div className="z-[1]">
            <p className="text-2xl font-semibold lg:text-3xl">Jamiu Salaudeen</p>
            <h1 className="text-4xl text-purple font-black mt-2 mb-1 dark:text-green-light lg:text-5xl"><span className="font-normal text-black dark:text-white">A</span> Front-End Developer</h1>
            <h3 className="text-3xl max-w-[30ch] mb-10 lg:text-4xl">Adept at finding solutions and determining customers satisfaction</h3>
            <Link to='/#contact__section'>
              <button className="py-3 px-7 text-xl bg-green-light border-purple text-purple rounded-lg font-bold border-4 dark:text-gold-light dark:border-gold-light dark:bg-black">Contact Me</button>
            </Link>
          </div>
          <div className="absolute w-full h-full flex flex-wrap grow-0 justify-between gap-x-6 gap-y-6 items-center left-0 top-0 p-16 px-4">
            <span className={`w-20 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-start`}></span>
            <span className={`w-8 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-start`}></span>
            <span className={`w-12 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-end`}></span>
            <span className={`w-6 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-center`}></span>
            <span className={`w-20 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-center`}></span>
            <span className={`w-12 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-end`}></span>
            <span className={`w-8 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-start`}></span>
          </div>
        </div>
        <div>

        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Hero