// // import React from 'react'
// // import Image from 'next/image'
// // import work from '../Components/assets/work.gif'
// // import bg from '../Components/assets/bg.jpeg'

// // const page = () => {
// //   return (
// //     <section className="py-16">
// //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //     <div className="text-center">
// //       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Discover our work</h2>
// //       <div className="h-1 w-24 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
// //       <p className="mt-6 text-xl text-gray-600">
// //         We are creative Machine Learning, Deep learning and Full Stack Developers. passionate about crafting beautiful and user-friendly websites, web applications and AI Based projects.
// //       </p>
// //     </div>
// //       </div>
// //       <div className=' bg-slate-200  mt-20 gap-8 px-8 grid  grid-cols-3'>
// //         <div className='bg-white rounded-xl'>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1 className='font-bold  '>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div>
// //           <div className='bg-white  rounded-xl '>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div><div className='bg-white  rounded-xl '>
// //         <Image className='rounded-t-xl' src={bg} alt = "Machine learning" />
// //           <h1>Machine Learning</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// //           Numquam ipsam aliquam id! Libero totam iusto hic veniam exercitationem nisi sit tempore iste reprehenderit, 
// //           odio velit officiis. Beatae maxime amet nemo?</p></div>
// //       </div>
// //       </section>

// //   )
// // }

// // export default page


// "use client"
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaBars, FaTimes, FaMoon, FaSun, FaSearch } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   // Variants for animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
//   };

//   return (
//     <motion.div
//       className="flex items-center justify-between p-4 bg-[#0c213f] text-[#08FDD8] rounded-full m-4 "
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <a href="#" className="text-lg font-bold">CryptoSpace</a>
//       <div className="hidden md:flex space-x-4">
//         <a href="#" className="hover:border-b-2 hover:border-[#08FDD8]">Home</a>
//         <a href="#" className="hover:border-b-2 hover:border-[#08FDD8]">About</a>
//         <a href="#" className="hover:border-b-2 hover:border-[#08FDD8]">Services</a>
//         <a href="#" className="hover:border-b-2 hover:border-[#08FDD8]">Contact</a>
//       </div>
//       <div className="flex items-center">
//         <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-lg p-2">
//           {isDarkMode ? <FaSun /> : <FaMoon />}
//         </button>
//         <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       <motion.div
//         className="absolute top-16 left-0 w-full bg-[#0A192F] shadow-md md:hidden"
//         initial={{ height: 0 }}
//         animate={{ height: isOpen ? "auto" : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex flex-col items-center">
//           <a href="#" className="p-2">Home</a>
//           <a href="#" className="p-2">About</a>
//           <a href="#" className="p-2">Services</a>
//           <a href="#" className="p-2">Contact</a>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Navbar;
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0b1729] h-full lg:h-screen">
      <div className="text-[#FAF9F6] lg:max-w-[1500px] mx-auto">
        <div className={"text-white text-4xl font-bold"}>
          Strengthening Distributed Storage
        </div>
        <p className="text-gray-400 max-w-[900px] text-2xl  mt-5">
          Various foreverbox Nodes make up the decentralised and distributed
          blockchain-based storage network. The manner that individuals save,
          trade and authenticate valuable data will gradually change thanks to
          foreverbox.
        </p>
        <div className="lg:flex gap-y-10 justify-between mt-8">
          {/* Left */}
          <div className="">
            <div className="flex gap-8">
              {/* 1 */}
              <div className=" mt-24 w-[352px] rounded">
                <div className="">
                  <Image src="/pic1.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="  h-[284px] w-[352px] rounded">
                <div className="">
                  <Image src="/pic2.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-8  mt-10">
              {/* 3 */}
              <div className="w-[352px] rounded">
                <div className="">
                  <Image src="/pic1.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="w-[352px] rounded">
                <div className="">
                  <Image src="/pic2.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="rounded ">
            <Image src="/crp.jpeg" alt="img" width={600} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;