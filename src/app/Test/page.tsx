import React from 'react'
import Image from 'next/image'
import work from '../Components/assets/work.gif'
import bg from '../Components/assets/bg.jpeg'

const page = () => {
  return (
    <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Discover our work</h2>
      <div className="h-1 w-24 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
      <p className="mt-6 text-xl text-gray-600">
        We are creative Machine Learning, Deep learning and Full Stack Developers. passionate about crafting beautiful and user-friendly websites, web applications and AI Based projects.
      </p>
    </div>
      </div>
      <div className=' bg-slate-200  mt-20 gap-8 px-8 grid  grid-cols-3'>
        <div className='bg-white rounded-xl'>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1 className='font-bold  '>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div>
          <div className='bg-white  rounded-xl '>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
        <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
          <h1>Machine Learning</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
          odio velit officiis. Beatae maxime amet nemo?</p></div>
      </div>
      </section>

  )
}

export default page