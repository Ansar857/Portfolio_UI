import Button from "../shared/Button"
import Image from "next/image"


const Header = () => {
  return (
    <header>
      <div className=" bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="flex justify-between items-center mx-10 py-10">
        <div className=" sm:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button" className="-space-x-10 items-center  p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* <!-- Icon when menu is closed. -->
          --> */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* <!-- Icon when menu is open. -->
          --> */}
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="text-white"><div className="flex-shrink-0">
          <Image className="block lg:hidden h-8 w-auto" width={40} height={40} src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <Image className="hidden lg:block h-8 w-auto" width={40} height={40} src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div></div>

        <div className="hidden sm:block sm:ml-6">
          <a href="/Test" className="bg-slate-200 text-black px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
          <a href="/" className="text-white  hover:bg-blue-500 px-3 mx-2 py-2 rounded-md text-sm font-medium">Work</a>
          <a href="/" className="text-white  hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
        </div>
        <div className="flex-shrink-0" >
          <Button text="Get in Touch" path="#" />
        </div>


      </div>
  <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#fff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,218.7C384,235,480,181,576,149.3C672,117,768,107,864,106.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
  
</div>
      
    </header>
  )
}

export default Header