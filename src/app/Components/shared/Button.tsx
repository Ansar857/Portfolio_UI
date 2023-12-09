'use client'
import { useRouter } from "next/navigation"


const Button = ({text,path}:any) => {
    const router = useRouter()
  return (
    <button className=" bg-purple-900 hover:bg-blue-700 duration-500 text-slate-100 text-xs px-2 py-2 sm:text-lg sm:px-4 sm:py-3 font-semibold rounded-full" onClick={()=> router.push(path)}>{text}</button>
  )
}

export default Button