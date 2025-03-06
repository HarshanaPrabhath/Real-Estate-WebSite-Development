import React from 'react'
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
<button className=' bg-red-500 rounded text-sm text-white items-center flex justify-center w-full px-2 py-3 4 hover:bg-red-800 active:bg-blue-800'>
    <FcGoogle/> 
    <p className='mx-4 uppercase '>Continue with Google</p>
</button>
  )
}

export default OAuth
