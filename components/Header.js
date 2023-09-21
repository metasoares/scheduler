import React from 'react'

export default function Header () {
  return (
    <header className='w-full h-16 flex bg-green-50  text-orange-800 justify-center'>
            <nav className='w-11/12 flex items-center justify-center bg-green-400'>
              <div  className='w-36 h-full flex items-center'>
              <h3 className='text-xl font-medium'>Scheduler</h3>
              </div>
              <ul className='w-full h-full flex justify-evenly items-center bg-gray-300'>
                <li>Dashboard</li>
                <li>Calendar</li>
                <li>Icon</li>
              </ul>
              <div className='w-44 h-full flex justify-between items-center bg-yellow-400'>
                <div className='w-11 h-11 rounded-full border-2 border-blue-700'>
                  <span className='w-11 h-11 rounded-full bg-green-700'></span>
                </div>
                <paragraph>Name</paragraph>
              </div>
            </nav>
    </header>
  )
}

