
const Qaurterbox = ({heading,paragraph,number}:any) => {
  return (
        <div className="relative sm:w-2/4 sm:py-40"> 
            <h1 className="text-xl text-slate-800 sm:text-2xl text-center sm:text-start lg:text-4xl py-4 font-semibold">{heading}</h1>
            <p className="text-slate-600 text-sm sm:text-xl text-center sm:text-start ">{paragraph}</p>
                <h6 className="absolute text-5xl sm:text-9xl font-semibold text-gray-300 -z-10 top-0">{number}</h6>
        
        </div>

  )
}

export default Qaurterbox