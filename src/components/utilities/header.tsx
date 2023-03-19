import LogoLight from '../../assets/media/dEx-Logofiles-black.png'
import LogoDark from '../../assets/media/dEx-Logofiles-color.png'
import { HashLink as Link } from 'react-router-hash-link'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { themeAction } from '../../store/actions/themeAction'
import { darkTheme, lightTheme } from '../../store/types/themeType'
import { menuAction } from '../../store/actions/menuAction'
import { toggleMenu } from '../../store/types/menuType'
import Menu from './menu'

const Header = () => {

  const menuState = useAppSelector(state => state.MenuReducer.menuState)
  const dispatchMenuAction = useAppDispatch()

  const theme = useAppSelector(state => state.ThemeReducer.currentTheme)
  const dispatchThemeAction = useAppDispatch()

  const setCurrentTheme = (theme: 'light' | 'dark') => {
    dispatchThemeAction(themeAction(theme))
    localStorage.setItem('theme', theme)
  }

  return (
    <header
      className={`z-20 flex items-center justify-between sticky top-0 p-5 bg-green-light dark:bg-black md:static md:shadow-none md:py-6 px-10`}
    >
      <img
        src={theme === 'dark' ? LogoDark : LogoLight} alt="#logo"
        className='w-24'
      />
      <nav
        className='items-center gap-x-12 hidden text-base md:text-lg md:flex'
      >
        <Link to="#about__section"
          aria-label='button'
          className={`block text-lg font-medium hover:text-pink`}
        >
          About</Link>
        <Link to="#portfolio__section"
          aria-label='button'
          className={`block text-lg font-medium hover:text-pink`}
        >
          Portfolio</Link>
        <Link to="#contact__section"
          aria-label='button'
          className={`block text-lg font-medium hover:text-pink`}
        >
          Contact</Link>
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
          className={`${theme === 'light' ? 'right-0 bg-purple' : 'left-0 bg-green-light'} shadow-black transition-all absolute isolate rounded-full w-[26px] aspect-square`}
        ></div>
      </button>
      <div
        onClick={() => dispatchMenuAction(menuAction(toggleMenu))}
        className={`${menuState ? 'h-max' : 'h-6'} z-30 flex flex-col justify-between cursor-pointer md:hidden`}
      >
        <span className={`bg-black dark:bg-white ${menuState ? 'rotate-45 w-10' : ''} z-10 transition-all block w-10 h-1 `}></span>
        <span className={`bg-black dark:bg-white ${menuState ? 'hidden' : ''} z-10 transition-all block w-10 h-1 `}></span>
        <span className={`bg-black dark:bg-white ${menuState ? '-rotate-45 w-10' : ''} z-10 transition-all block w-10 h-1 `}></span>
      </div>
      <Menu />
    </header>
  )
}

export default Header