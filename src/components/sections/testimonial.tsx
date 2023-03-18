import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    pauseOnHover: true
  };

  return (
    <section className="px-12 pt-12 pb-32 relative md:px-28">
      <h2 className="text-4xl mb-8 font-bold tracking-wider">Testimonial</h2>
      <Slider autoplay {...settings}>
        <div className="relative px-2">
          <p className="text-xl max-w-[60ch]">
            <p className="mb-12 relative pb-3 leading-7">Jamiu is a seasoned developer with reasonable amount of experience in Front-End development. He led and managed our Front-End development unit during the 2022 Zuri Internship which we ranked among the top 10 best teams. Throughout the project, he was able to take our vision and turn it into a beautiful and functional website. His attention to detail and understanding of user experience made for a website that was both aesthetically pleasing and easy to use.
              <span className="absolute right-0 bottom-0 w-1/2 h-[3px] bg-gradient-to-r from-pink to-purple dark:from-gold-light dark:to-pink md:w-1/3"></span>
            </p>
            <b className="mb-1 leading-6 capitalize block">Abdullahi Busari O</b>
            <span className="leading-6 relative pl-10">
              <span className="w-9 h-[3px] bg-gradient-to-r from-pink to-purple dark:from-gold-light dark:to-pink absolute left-0 top-1/2 -translate-y-1/2"></span>
              Back-End developer(Django, Python)
            </span>
          </p>
        </div>
        <div className="relative px-2">
          <p className="text-xl max-w-[60ch]">
            <p className="mb-12 relative pb-3 leading-7">I had the pleasure of working with Jamiu on a project, and I have to say, it was an excellent experience. He was not only highly skilled and knowledgeable in frontend development but also a great team player and communicator. I highly recommend Jamiu for any frontend development projects.
              <span className="absolute right-0 bottom-0 w-1/2 h-[3px] bg-gradient-to-r from-pink to-purple dark:from-gold-light dark:to-pink md:w-1/3"></span>
            </p>
            <b className="mb-1 leading-6 capitalize block">Al-Hassan Abdulmumin</b>
            <span className="leading-6 relative pl-10">
              <span className="w-9 h-[3px] bg-gradient-to-r from-pink to-purple dark:from-gold-light dark:to-pink absolute left-0 top-1/2 -translate-y-1/2"></span>
              Fullstack developer at Ajian Labs
            </span>
          </p>
        </div>
      </Slider>
    </section>
  )
}

export default Testimonial