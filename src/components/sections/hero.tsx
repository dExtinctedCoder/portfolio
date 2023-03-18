import { HashLink as Link } from "react-router-hash-link"
import { useAppSelector } from "../../store/hooks"
import Header from "../utilities/header"
import {BsLinkedin, BsTwitter, BsGithub, BsWhatsapp} from 'react-icons/bs'

const Hero = () => {

  const theme = useAppSelector(state => state.ThemeReducer.currentTheme)

  return (
    <section 
      aria-label='hero__section'
      className=" shadow-xl flex flex-col "
    >
      <div className="py-24 pb-40 px-8 relative overflow-x-hidden grow basis-full md:px-16 md:flex md:items-center lg:px-24 lg:pb-48">
        <div className="flex items-center">
          <div className="z-[1]">
            <p className="text-2xl font-semibold lg:text-3xl">Jamiu Salaudeen</p>
            <h1 className="text-4xl text-purple font-black mt-2 mb-1 dark:text-green-light lg:text-5xl"><span className="font-normal text-black dark:text-white">A</span> Front-End Developer</h1>
            <h3 className="text-3xl max-w-[30ch] mb-10 lg:text-4xl">Adept at finding solutions and determining customers satisfaction</h3>
            <Link to='/#contact__section'>
              <button className="py-3 px-7 text-xl bg-green-light border-purple text-purple rounded-lg font-bold border-4 transition-all hover:bg-purple hover:text-white dark:hover:bg-gold-light dark:hover:text-black dark:text-gold-light dark:border-gold-light dark:bg-black">Contact Me</button>
            </Link>
          </div>
          <div className="absolute w-full h-full flex flex-wrap grow-0 justify-between gap-x-6 gap-y-6 items-center left-0 top-0 p-16 px-4">
            <span className={`w-20 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-10 border-[6px] opacity-20 self-start`}></span>
            <span className={`w-8 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-start`}></span>
            <span className={`w-12 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-end`}></span>
            <span className={`w-20 hidden aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-20 border-[6px] opacity-20 self-start lg:block`}></span>
            <span className={`w-6 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-10 border-[6px] opacity-20 self-center`}></span>
            <span className={`w-20 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-20 border-[6px] opacity-20 self-center md:delay-0`}></span>
            <span className={`w-8 hidden aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-30 border-[6px] opacity-20 self-start lg:block`}></span>
            <span className={`w-12 hidden aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-20 border-[6px] opacity-20 self-end lg:block`}></span>
            <span className={`w-20 hidden aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-40 border-[6px] opacity-20 self-center lg:block`}></span>
            <span className={`w-12 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner delay-10 border-[6px] opacity-20 self-end`}></span>
            <span className={`w-8 aspect-square ${theme === 'light' ? 'border-purple' : 'border-pink'} animate-spinner border-[6px] opacity-20 self-start`}></span>
          </div>
        </div>
        <div className="absolute right-0 mr-8 bottom-0 mb-10 flex flex-col items-center md:right-[15%] md:bottom-[10%]">
          <span className={`w-[3px] h-24 bg-black block mb-2 dark:bg-white md:mb-3 md:h-36`}></span>
          <a href="https://twitter.com/dextinctedcoder" target='_blank'><BsTwitter fontSize={24} className={`text-black hover:text-purple dark:text-white dark:hover:text-green-light mb-3 cursor-pointer md:mb-6`} /></a>
          <a href="https://github.com/dExtinctedCoder" target='_blank'><BsGithub fontSize={24} className={`text-black hover:text-purple dark:text-white dark:hover:text-green-light mb-3 cursor-pointer md:mb-6`} /></a>
          <a href="https://www.linkedin.com/in/dextinctedcoder/" target='_blank'><BsLinkedin fontSize={24} className={`text-black hover:text-purple dark:text-white dark:hover:text-green-light mb-3 cursor-pointer md:mb-6`} /></a>
          <a href="https://wa.me/2347084195933?text=Hi,Jamiu.%I%will%like%to%discuss%a%job%offer%with%you" target='_blank'><BsWhatsapp fontSize={24} className={`text-black hover:text-purple dark:text-white dark:hover:text-green-light cursor-pointer`} /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero