'use client'
import Coretrack from "./Components/widgets/Coretrack"
import Data from "./Components/widgets/Data"
import Footer from "./Components/widgets/Footer"
import Hero from "./Components/widgets/Hero"
import Services from "./Components/widgets/Services"
import Team_profiles from "./Components/widgets/Team_profiles"
import Design01 from "./Components/widgets/Design01"
import Remote02 from "./Components/widgets/Remote02"
import Easy_process from "./Components/widgets/Easy_process"
import Small_track from "./Components/widgets/Small_track"
import { useEffect } from 'react'
import { initHotjar } from "./Components/Hotjar"


const Page = () => {

  useEffect(() => {
    initHotjar();
  }, []);
  return (
    
    <div  className=""  >
      {/* <Image src = {bg} alt = "Metaverse"/> */}

      <Hero/>
      <Small_track/>
      <Design01/>
      <Remote02/>
      <Easy_process/>
      <Coretrack/>
      <Services/>
      <Team_profiles/>
      <Data/>
      <Footer/>
    

    </div>
  )
}

export default Page