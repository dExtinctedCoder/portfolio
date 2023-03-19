import { BsTwitter, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import Resume from '../../assets/Jamiu_Salaudeen-Resume.pdf'

const Footer = () => {

  const currentYear = new Date().getFullYear()
  return (
    <footer
      className="bg-[#69AB88] text-white pt-8 dark:bg-black"
    >
      <h2
        className="text-4xl text-center font-semibold tracking-widest"
      >Front-End Developer</h2>
      <p
        className='text-xl text-center px-12 pt-10'
      >Hi there, I'm open to frontend projects or role opportunities and would be thrilled to connect with you. If you are in need of a skilled frontend developer, please feel free to <a href='mailto:jamiumuhammed011@gmail.com' className='text-[#D0006E] dark:text-green-light font-semibold'>reach out to me</a>. I look forward to hearing from you!
      </p>
      <ul
        className='flex flex-wrap items-center justify-center gap-8 py-10'
      >
        <li className=''>
          <a href="https://twitter.com/dextinctedcoder" target='_blank'><BsTwitter fontSize={28} className={`text-black hover:text-purple dark:text-white dark:hover:text-gold-light cursor-pointer`} /></a>
        </li>
        <li>
          <a href="https://github.com/dExtinctedCoder" target='_blank'><BsGithub fontSize={28} className={`text-black hover:text-purple dark:text-white dark:hover:text-gold-light cursor-pointer`} /></a>
        </li>
        <li className=''>
          <a href="https://www.linkedin.com/in/dextinctedcoder/" target='_blank'><BsLinkedin fontSize={28} className={`text-black hover:text-purple dark:text-white dark:hover:text-gold-light cursor-pointer`} /></a>
        </li>
        <li className=''>
          <a href="https://wa.me/2347084195933?text=Hi,Jamiu.%I%will%like%to%discuss%a%job%offer%with%you" target='_blank'><BsWhatsapp fontSize={28} className={`text-black hover:text-purple dark:text-white dark:hover:text-gold-light cursor-pointer`} /></a>
        </li>
      </ul>
      <div
        className='flex items-center justify-center pt-6 pb-5'
      >
        <a
          href={Resume} download="Jamiu-Salaudeen--Resume"
          className='py-3 px-4 font-semibold bg-purple text-green-light rounded-lg dark:text-black dark:bg-gold-light'
        >
          Download Resume
        </a>
      </div>
      <small className="block bg-[#2D4A3B] pt-3 py-5 text-center text-sm tracking-[0.35em] dark:bg-[#000000]">&copy; dExtinctedCoder {currentYear}</small>
    </footer>
  )
}

export default Footer