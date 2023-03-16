import LogoLight from '../../assets/media/dEx-Logofiles-black.png'
import LogoDark from '../../assets/media/dEx-Logofiles-color.png'
import {BsSunFill, BsMoonFill} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { themeAction } from '../../store/actions/themeAction'
import { darkTheme, lightTheme } from '../../store/types/themeType'
import { menuAction } from '../../store/actions/menuAction'
import { toggleMenu } from '../../store/types/menuType'

const Hero = () => {

  const menuState = useAppSelector(state => state.MenuReducer.menuState)
  const dispatchMenuAction = useAppDispatch()

  const theme = useAppSelector(state => state.ThemeReducer.currentTheme)
  const dispatchThemeAction = useAppDispatch()

  const setCurrentTheme = (theme: 'light' | 'dark') => {
    dispatchThemeAction(themeAction(theme))
    localStorage.setItem('theme', theme)
  }

  return (
    <section 
      aria-label='hero__section'
      className=''
    >
      <header
        className='flex items-center justify-between p-5 md:py-6 px-10'
      >
        <img 
          src={theme === 'dark' ? LogoDark : LogoLight} alt="#logo"
          className='w-24'
         />
        <nav
          className='items-center gap-x-12 hidden text-base md:text-lg md:flex'
        >
          <a href="#about__section"
            aria-label='button'
            className='block'
          >
            About</a>
          <a href="#profile__section"
            aria-label='button'
            className='block'
          >
            Profile</a>
          <a href="#contact__section"
            aria-label='button'
            className='block'
          >
            Contact</a>
        </nav>
        <button
          className={`${theme === 'light' ? 'bg-black' : 'bg-white'} relative rounded-xl flex items-center w-14`}
        >
          <BsMoonFill
           fontSize={24}
           onClick={() => setCurrentTheme(darkTheme)}
           className={`${theme === 'light' ? 'text-white' : 'text-black'} p-1 grow basis-full`}
           />
          <BsSunFill
           fontSize={24}
           onClick={() => setCurrentTheme(lightTheme)}
           className={`${theme === 'light' ? 'text-white' : 'text-black'} p-1 grow basis-full`}
           />
           <div
            className={`${theme === 'light' ? 'right-0' : 'left-0'} shadow-black transition-all absolute isolate rounded-full w-[26px] aspect-square bg-green-light`}
           ></div>
        </button>
        <div
        onClick={() => dispatchMenuAction(menuAction(toggleMenu))}
          className={`${menuState ? 'h-max' : 'h-6'} flex flex-col justify-between cursor-pointer md:hidden`}
        >
          <span className={`${theme === 'light' ? (!menuState ? 'bg-black' : 'bg-green-light') : (menuState ? 'bg-green-light' : 'bg-white')} ${menuState ? 'rotate-45 w-10' : '' } z-10 transition-all block w-10 h-1 `}></span>
          <span className={`${theme === 'light' ? (!menuState ? 'bg-black' : 'bg-green-light') : (menuState ? 'bg-green-light' : 'bg-white')} ${menuState ? 'hidden' : '' } z-10 transition-all block w-10 h-1 `}></span>
          <span className={`${theme === 'light' ? (!menuState ? 'bg-black' : 'bg-green-light') : (menuState ? 'bg-green-light' : 'bg-white')} ${menuState ? '-rotate-45 w-10' : '' } z-10 transition-all block w-10 h-1 `}></span>
        </div>
      </header>

      <div>

      </div>
    </section>
  )
}

export default Hero