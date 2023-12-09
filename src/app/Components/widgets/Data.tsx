import Button from "../shared/Button"
import Wraper from "../shared/Wraper"

const Data = () => {
  return (
  <form>
    <Wraper>
        <main  className="mt-16 flex justify-center items-center flex-wrap">
        <div  className="w-4/12">
    <h1 className="text-blue-500 text-2xl sm:text-4xl text-center leading-normal sm:leading-loose font-bold "> Contact us Today
              </h1>
           
    </div>
            <div  className="grid grid-cols-[auto,1fr] max-w-lg sm:mx-auto gap-y-6 gap-x-6 p-8 border border-gray-300 bg-gradient-to-br  from-blue-500 to-purple-600 mt-24  mb-5 rounded-md" >
        <label className="text-white text-sm sm:text-xl font-semibold ">Full Name</label>
        <input className="text-sm sm:text-xl  text-slate-600 bg-slate-100 px-1 py-1 rounded-md" type="text" placeholder="Enter your name" />
        <label className="text-white text-sm sm:text-xl font-semibold">Email</label>
        <input className="text-sm sm:text-xl text-slate-600 bg-slate-100 px-1 py-1 rounded-md" type="text" placeholder="Enter your email" />
        
        <div className="inline-block col-start-2"><Button text="Create accoount"/></div>
    </div>
    
    
    </main>
    </Wraper>
  </form>
  )
}

export default Data