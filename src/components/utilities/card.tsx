import { IconType } from "react-icons/lib"
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from 'react-router-dom'

export type cardPropsType = {
  Icon: IconType
  Title: string
}

const Card = ({ Icon, Title, ...props }: cardPropsType) => {
  return (
    <div className="w-48 bg-[#A6ECD0] aspect-square flex items-center justify-center gap-y-6 shadow-lg rounded-lg flex-col dark:bg-[#292929] md:w-52">
      <Icon fontSize={38} className="text-purple dark:text-green-light" />
      <span className="uppercase text-lg text-purple dark:text-green-light">{Title}</span>
    </div>
  )
}

type portfolioPropsType = {
  title: string
  detail: string
  href: string
  bg: string
}

export const PortfolioCard = ({ title, detail, href, bg }: portfolioPropsType) => {
  return (
    <div
      className="text-center relative rounded-2xl overflow-hidden flex flex-col items-center justify-center aspect-[3/2] lg:aspect-square"
    >
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat opacity-30">

      </div>
      <div className="w-full h-full flex flex-col justify-center items-center p-8 px-10 z-10 text-white bg-[#69AB88] hover:bg-[rgba(22,22,22,0.55)] dark:bg-[#171616] dark:hover:bg-[rgba(22,22,22,0.55)]">
        <h5 className="text-2xl font-bold text-[#191919] mb-2">{title}</h5>
        <p className="mb-5 text-xl font-semibold">{detail}</p>
        <Link
          to={href}
          target="blank"
          className="bg-green-light text-black border-4 border-green-light py-1 px-4 flex items-center rounded-lg hover:bg-purple hover:text-white hover:border-purple"
        >See More <FaLongArrowAltRight className="ml-3" /></Link>
      </div>
    </div>
  )
}

export default Card