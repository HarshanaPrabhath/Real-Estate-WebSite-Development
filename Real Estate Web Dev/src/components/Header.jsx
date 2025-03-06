import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom'


function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMatchRoute(route){
        if (route === location.pathname ){
            return true; 
        }
    }

  return ( 
    <div className='bg-teal-600 shadow-sm sticky top-0 '>
      <header className="flex justify-between items-center px-3 mx-auto max-w-6xl ">
        <div className='text-white cursor-pointer'>
            <p onClick={()=>navigate("/")} className='text-lg'>Land Business</p>
        </div>
        <div>
           <ul className='flex space-x-10'>
            <li onClick={()=>navigate("/")}className={`text-lg text-gray-200 border-b-[3px] border-b-transparent py-3 cursor-pointer
                ${pathMatchRoute("/") && "text-white border-b-white"} `}>Home</li>
            <li onClick={()=>navigate('/offers')}className={`text-lg text-gray-200 border-b-[3px] border-b-transparent py-3 cursor-pointer
                ${pathMatchRoute("/offers") && "text-white border-b-white"} `}>Offers</li>
            <li onClick={()=>navigate('/signin')} className={`text-lg text-gray-200 border-b-[3px] border-b-transparent py-3 cursor-pointer
                ${pathMatchRoute("/signin") && "text-white border-b-white"} `}>Sign in</li>
           </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
