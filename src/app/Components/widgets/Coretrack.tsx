import React from 'react'
import Blackbutton from '../shared/Blackbutton'
import Wraper from '../shared/Wraper'

const Coretrack = () => {
  return (
    <section>

        <Wraper>
            <div  className='bg-gradient-to-l rounded-lg py-4 from-blue-500 to-purple-600 flex flex-col items-center  sm:items-start sm:space-x-24 mt-20 sm:mt-36'>
            <div className='mx-4  sm:mx-24'>
                <h1 className="text-blue-500 text-2xl font-semibold sm:font-bold sm:text-4xl leading-normal sm:leading-loose text-center sm:text-start items-center ">We’re problem solvers.
                <span className="text-slate-100 text-2xl sm:text-4xl font-semibold sm:font-bold "> We listen, observe, create and validate. Following a human-centred approach, 
                we work closely with you to get results fast and efficiently.</span></h1>
           </div>
           <div className='mt-5'><Blackbutton text = "read more about us" path = "#"/></div>
                </div>
        </Wraper>
    </section>
  )
}

export default Coretrack