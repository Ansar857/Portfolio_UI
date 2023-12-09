import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-gradient-to-l from-blue-500 to-purple-600">
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold mb-2">About Us</h2>
          <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus scelerisque blandit.</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold mb-2">Links</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold mb-2">Contact Us</h2>
          <ul className="list-none">
            <li className='text-purple-300'><span className="text-gray-200">Address:</span> 123 Main St, Anytown USA</li>
            <li className='text-purple-300' ><span className="text-gray-200">Phone:</span> 555-555-5555</li>
            <li className='text-purple-300' ><span className="text-gray-200">Email:</span> info@example.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-200">© 2023 My Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  </div>
  )
}

export default Footer