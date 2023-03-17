const Experience = () => {
  return (
    <section className=" px-10 pb-32 relative bg-[#acd907] dark:bg-[#292929] md:px-28">
      <h2 className="text-4xl mb-8 font-bold tracking-wider absolute top-0 -translate-y-[60%]">Experience</h2>
      <div className="pt-24 flex">
        <div className="clip-tag shadow-2xl font-light bg-green-light text-black mr-2 py-[2px] pl-3 pr-5 self-start dark:bg-black dark:text-white">2022</div>
        <div className="mr-2 flex items-center flex-col grow gap-y-2 h-auto min-h-full">
          <span className="block rounded-full w-4 aspect-square bg-gold-light shadow-2xl shadow-gold-light"></span>
          <span className="block w-1 h-full bg-black dark:bg-white"></span>
        </div>
        <div className="grow basis-full">
          <h4 className="text-2xl font-bold mb-2">Lead Front-End developer</h4>
          <h6 className="text-lg font-semibold mb-4">Topperize</h6>
          <p className="font-light">
            <p className="mb-2">Developed a Virtual Top-Up app that enables individual to buy and sell airtime from either their bank or their online wallet.</p>
            <p className="mb-2">Tested web-based product functionality an delivered iterations to customer.</p>
            <p className="mb-2">Coded using React, TypeScript and TailwindCss, to develop features for both mobile and desktop platforms.</p>
            <p>Improved tools to boost user interaction and deliver design versatility.</p>
          </p>
        </div>
      </div>
      <div className="pt-24 flex">
        <div className="clip-tag shadow-2xl font-light bg-green-light text-black mr-2 py-[2px] pl-3 pr-5 self-start dark:bg-black dark:text-white">2022</div>
        <div className="mr-2 flex items-center flex-col grow gap-y-2 h-auto min-h-full">
          <span className="block rounded-full w-4 aspect-square bg-gold-light shadow-2xl shadow-gold-light"></span>
          <span className="block w-1 h-full bg-black dark:bg-white"></span>
        </div>
        <div className="grow basis-full">
          <h4 className="text-2xl font-bold mb-2">Front-End developer</h4>
          <h6 className="text-lg font-light mb-4">Internship at <span className="font-semibold">HNG</span></h6>
          <p className="font-light">
            <p className="mb-2">Designed and updated layouts to meet usability and performance requirements.</p>
            <p className="mb-2">Use regulatory and compliance standards for user interface designs.</p>
            <p>Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.</p>
          </p>
        </div>
      </div>
      <div className="pt-24 flex">
        <div className="clip-tag shadow-2xl font-light bg-green-light text-black mr-2 py-[2px] pl-3 pr-5 self-start dark:bg-black dark:text-white">2022</div>
        <div className="mr-2 flex items-center flex-col grow gap-y-2 h-auto min-h-full">
          <span className="block rounded-full w-4 aspect-square bg-gold-light shadow-2xl shadow-gold-light"></span>
          <span className="block w-1 h-full bg-black dark:bg-white"></span>
        </div>
        <div className="grow basis-full">
          <h4 className="text-2xl font-bold mb-2">Fullstack developer</h4>
          <h6 className="text-lg font-light mb-4">Internship at <span className="font-semibold">Zuri</span></h6>
          <p className="font-light">
            <p className="mb-2">Produced websites compatible with multiple browsers.</p>
            <p className="mb-2">Developed a mobile and web responsive user interface</p>
            <p>Collaborated with Designers and Product managers to achieve the project requirement.</p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience