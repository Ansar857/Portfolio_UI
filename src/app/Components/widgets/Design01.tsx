import Qaurterbox from "../shared/Qaurterbox"
import Wraper from "../shared/Wraper"
import work from "../assets/developers_design.gif"
import Image from "next/image"

const Design01 = () => {
  return (
    <section>
      <Wraper>
        <div className="flex flex-col sm:flex-row mt-10 lg:mx-28 items-center lg:gap-10 gap-y-10">
  
      <Qaurterbox
     heading ="Design First" 
    paragraph = "Design-first is a philosophy that puts the user experience and user interface at the forefront of the development process. By prioritizing the design of the application,website, or software before writing a single line of code, developers can create an intuitive and engaging user experience that truly stands out." 
    number = "01" />
    
    <div className="">
      {/* { Sticker } */}
      <Image
        src={work}
        alt="Developer and Programmers Team Working GIF"
        width={500}
        height={881}
      /></div>

    </div>
   </Wraper>
   </section>

  )
}

export default Design01