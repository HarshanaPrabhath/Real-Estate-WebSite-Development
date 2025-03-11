import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'


function Header() {
    // to change sign in and profile image
    const [pageState,setPageState] = useState("Sign in")

    const auth = getAuth();
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
        if(user){
          setPageState("Profile")
        }else{
          setPageState("Sign in")
        }}
        )
    },[auth])
    //path match to navigation bar border
    function pathMatchRoute(route){
        if (route === location.pathname ){
            return true; 
        }
    }

  return ( 
    <div className='bg-teal-600 shadow-sm sticky top-0 '>
      <header className="flex justify-between items-center px-3 mx-auto max-w-6xl ">
        <div className='text-white cursor-pointer'>
            <p onClick={()=>navigate("/")} className='text-2xl transition-transform duration-300 hover:scale-110 tracking-widest'>LAND BUSINESS</p>
        </div>
        <div>
           <ul className='flex space-x-10'>
            <li onClick={()=>navigate("/")}className={`text-lg text-white border-b-[3px] border-b-transparent py-3 cursor-pointer transition-transform duration-300 hover:scale-110
                ${pathMatchRoute("/") && "border-b-white"} `}>Home</li>
            <li onClick={()=>navigate('/offers')}className={`text-lg text-white border-b-[3px] border-b-transparent py-3 cursor-pointer transition-transform duration-300 hover:scale-110
                ${pathMatchRoute("/offers") && "border-b-white"} `}>Offers</li>
            <li onClick={()=>navigate('/profile')} className={`text-lg text-white border-b-[3px] border-b-transparent py-3 cursor-pointer transition-transform duration-300 hover:scale-110
                ${(pathMatchRoute("/signin") || pathMatchRoute("/profile")) && "border-b-white"} `}>{pageState}</li>
           </ul>
           {/* <img src={imgSrc}></img> */}
        </div>
      </header>
    </div>
  )
}

export default Header
