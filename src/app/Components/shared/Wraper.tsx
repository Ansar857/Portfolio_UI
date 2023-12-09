import {FC} from 'react'




// const Wraper:FC<{children:React.ReactNode}> = ({children}) => {
  const Wraper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' mx-auto px-5 mr-2 '>{children}</div>
  )
}

export default Wraper




