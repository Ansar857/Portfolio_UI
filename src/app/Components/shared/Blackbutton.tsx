'use client'
import { useRouter } from "next/navigation"


const Blackbutton = ({text,path}:any) => {
    const router = useRouter()
  return (
    <button className=" bg-gray-700 hover:bg-gray-800 duration-500 text-slate-100 text-xs sm:text-lg px-2 py-2 sm:px-4 sm:py-3  font-semibold rounded-full" onClick={()=> router.push(path)}>{text}</button>
  )
}

export default Blackbutton