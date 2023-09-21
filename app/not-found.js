import React from 'react'
import Image from 'next/image'

const Notfound = () => {
  return (
    <main className='w-full h-screen bg-gray-950 flex justify-center items-center'>
        <div className='w-58 h-60 flex flex-col space-y-8'>
        <img className='w-52 h-40 object-fill ' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/poker-face-647233.png' alt=''/>
        <div className='w-full h-6 flex items-center justify-center text-white'>
        <paragraph>Hi User, This page has not found</paragraph>
        </div>
        </div>
    </main>
  )
}

export default Notfound