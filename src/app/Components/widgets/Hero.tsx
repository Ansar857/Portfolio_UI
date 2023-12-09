import Wraper from '../shared/Wraper'
import Image from 'next/image'
import web_development from "../assets/web_development.gif"
import work from '../assets/work.gif'

const Hero = () => {
  return (
    <section>
      <Wraper>
        <main className='flex sm:flex-row flex-col gap-4 justify-between items-center'>
          <div className=' mt-2 py-6 sm:py-24   rounded-lg'>
            
              <h1 className="text-2xl text-slate-800 sm:text-3xl lg:text-5xl xl:text-7xl py-4 text-center sm:leading-10  font-bold">
                We create digital products that
                <span className='text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-center font-bold px-2 sm:px-5 text-blue-600'>Work</span></h1>
              <p className='text-sm mt-2 text-purple-800 sm:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed sm:leading-tight xl:mx-32 sm:mt-1 lg:mt-8 '>Artificiallo is a digital agency that focuses on making an
                impact by designing and building valuable solutions.
              </p>
            </div>

          
          <div><Image
        src={web_development}
        alt="Developer and Programmers Team Working GIF"
        width={1100}
        height={881}
      /></div>
        </main>
      </Wraper>
    </section>
  )
}

export default Hero





{/* <div className='mt-5 sm:mt-10 gap-2 flex flex-col sm:flex-row items-center justify-center '>
              <div><Button text="Get in Touch" path="#" /></div>
              <div><Blackbutton text="view Our Services" path="#"/></div>
            </div> */}