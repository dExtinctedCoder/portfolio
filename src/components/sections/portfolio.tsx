import { PortfolioCard } from "../utilities/card"
import Netflix from '../../assets/media/NetflixD.png'
import Pricify from '../../assets/media/pricifyD~2.png'
import TicTac from '../../assets/media/TicTacD.jpg'
import Huddle from '../../assets/media/Huddle.jpg'
import Country from '../../assets/media/CountryD.jpg'

const Portfolio = () => {

  const projects = [
    {
      title: 'TicTac',
      detail: 'Tic-Tac Toe game built with vanilla js',
      href: 'https://dextinctedcoder.github.io/Tic-Tac-Toe/',
      bg: TicTac,
    },
    {
      title: 'Netflix',
      detail: 'A clone of Netflix website landing page',
      href: 'https://netflix-clone-two-phi-59.vercel.app/',
      bg: Netflix,
    },
    {
      title: 'Huddle',
      detail: 'Huddle Landing Page',
      href: 'https://dextinctedcoder.github.io/Huddle-landing-page/',
      bg: Huddle,
    },
    {
      title: 'Pricify',
      detail: 'compare prices of phones accross multiple platforms',
      href: 'https://dextinctedcoder.github.io/Tic-Tac-Toe/',
      bg: Pricify,
    },
    {
      title: 'Countries App',
      detail: 'information on countries around the world',
      href: 'https://dextinctedcoder.github.io/CountriesApp/',
      bg: Country,
    },
  ]

  return (
    <section id="portfolio__section" className="px-10 pb-32 md:px-28">
      <h2 className="text-center text-4xl mb-8 font-bold tracking-wider">Portfolio</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {
          projects.map(({ title, detail, href, bg }) => {
            return <PortfolioCard title={title} detail={detail} href={href} bg={bg} />
          })
        }
      </div>
    </section>
  )
}

export default Portfolio