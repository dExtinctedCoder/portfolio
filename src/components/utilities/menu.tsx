import { VscProject } from 'react-icons/vsc'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsFill } from 'react-icons/ri'
import { BsTools } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link'
import { useAppSelector } from '../../store/hooks'

const Menu = () => {

  const menuState = useAppSelector(store => store.MenuReducer.menuState)

  return (
    <aside
      className={`${menuState ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'} z-20 w-52 overflow-hidden aspect-square absolute right-0 top-0 bg-[transparent] md:hidden`}
    >
      <Link
        className={`${menuState ? '' : 'translate-x-[300px]'} transition-all duration-500 w-12 aspect-square absolute translate-y-1/2 translate-x-1/2 bg-black dark:bg-white flex items-center justify-center rounded-full`}
        to="#about__section">
        <SiAboutdotme
          className="text-gold-light cursor-pointer"
          fontSize={30} />
      </Link>
      <Link
        className={`${menuState ? '' : '-translate-y-[200px] translate-x-[350px]'} delay-[100ms] transition-all duration-500 w-12 aspect-square absolute bottom-1/2 translate-y-[85%] bg-black dark:bg-white flex items-center justify-center rounded-full`}
        to="#skill__section">
        <BsTools
          className="text-gold-light cursor-pointer"
          fontSize={30} />
      </Link>
      <Link
        className={`${menuState ? '' : '-translate-y-[350px] translate-x-[200px]'} delay-[200ms] transition-all duration-500 w-12 aspect-square absolute bottom-0 right-1/2 translate-x bg-black dark:bg-white flex items-center justify-center rounded-full`}
        to="#portfolio__section">
        <VscProject
          className="text-gold-light cursor-pointer"
          fontSize={30} />
      </Link>
      <Link
        className={`${menuState ? '' : '-translate-y-[300px]'} delay-[300ms] transition-all duration-500 w-12 aspect-square absolute bottom-0 right-0 -translate-y-1/2 -translate-x-1/2 bg-black dark:bg-white flex items-center justify-center rounded-full`}
        to="#contact__section">
        <RiContactsFill
          className="text-gold-light cursor-pointer"
          fontSize={30} />
      </Link>
    </aside>
  )
}

export default Menu