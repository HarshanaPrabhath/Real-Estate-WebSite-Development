import React from 'react'
import loading from '../assets/svg/loading.svg'

function Spinner() {
  return (
    <div className='flex items-center justify-center fixed right-0 bottom-0 left-0 top-0 z-50'>
      <div className='justify-between'>
        <img src={loading} alt="Loading...." className='h-24'/>
      </div>
    </div>
  )
}

export default Spinner
