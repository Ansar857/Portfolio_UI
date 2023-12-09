import Qaurterbox from "../shared/Qaurterbox"
import Wraper from "../shared/Wraper"
import computer_vision from "../assets/computer_vision.gif"
import Image from "next/image"

const Remote02 = () => {
  return (
    <section>
      <Wraper>
        <div className="flex flex-col-reverse sm:flex-row mt-10 lg:mx-28 items-center lg:gap-10 gap-y-10">
        <div>
      {/* { Sticker } */}
      <Image
        src={computer_vision}
        alt="Developer and Programmers Team Working GIF"
        width={500}
        height={881}
      /></div>

      <Qaurterbox
     heading ="Fully Remote" 
     paragraph = "Design-first is a philosophy that puts the user experience and user interface at the forefront of the development process. By prioritizing the design of the application,website, or software before writing a single line of code, developers can create an intuitive and engaging user experience that truly stands out." 
     number = "02" />

   
    </div>








    <div>
   </div>
   </Wraper>
   </section>

  )
}

export default Remote02