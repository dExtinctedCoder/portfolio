import {SlLocationPin} from 'react-icons/sl'
import {FiPhone} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section 
      id="contact__section"
      className="py-16 mb-8 relative border-y-[6px] border-gold-light md:py-20"
    >
      <h2 className="bg-green-light text-4xl z-10 mb-8 px-4 font-bold tracking-wider absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+8px)] dark:bg-black">Contact Me</h2>
      <div
        className='flex items-center flex-wrap text-lg justify-center gap-4'
      >
        <div
          className='rounded-md w-[323px] text-white bg-purple dark:text-gold-light dark:bg-[#292929] md:w-1/3 md:text-center'
        ><a 
          role="button" 
          className="flex items-center w-full gap-x-1 py-2 px-4 md:justify-center"
          href="mailto:jamiumuhammed011@gmail.com"
        ><MdOutlineEmail fontSize={18} />jamiumuhammed011@gmail.com</a></div>
        <div
          className='flex items-center w-[323px] gap-x-1 py-2 px-4 rounded-md text-white bg-purple dark:text-gold-light dark:bg-[#292929] md:w-1/3 md:justify-center'
        ><FiPhone />(+234) 708 419 5933</div>
        <div
          className='flex items-center w-[323px] gap-x-1 py-2 px-4 rounded-md text-white bg-purple dark:text-gold-light dark:bg-[#292929] md:w-1/3 md:justify-center'
        ><SlLocationPin /> Nigeria</div>
      </div>
    </section>
  )
}

export default Contact