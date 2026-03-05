import React, { useState } from 'react'

const MenuBar = () => {
    const [display, setdisplay] = useState(true)
  return (
    <div className='absolute right-3 top-4'>
        <button
        onClick={()=> setdisplay(!display)}
         className=' text-white text-xl active:scale-95 bg-red-500 w-8 h-8 rounded-full'>
        <i className="ri-menu-line"></i>
        </button>
    <div className={`bg-white w-64 h-screen opacity-100 rounded-l-2xl right-0 top-0 fixed z-20 flex justify-around transition-all duration-600 ${display ? "translate-x-0":"translate-x-full"}`}>
        <div className='text-sm font-bold text-black flex flex-col gap-4 pt-7'>
            <h1> <i className="ri-sun-line text-green-400"></i> Appearance</h1>
            <h1> <i className="ri-user-line text-green-400"></i> Account</h1>
            <h1> <i className="ri-settings-3-line text-green-400"></i> Settting</h1>
            <h1> <i className="ri-download-cloud-line text-green-400"></i> Downloads</h1>
            <h1> <i className="ri-history-fill text-green-400"></i> History</h1>
            <h1> <i className="ri-book-marked-fill text-green-400"></i> Bookmark & List</h1>
            <h1> <i className="ri-grid-fill text-green-400"></i> Tab Groups</h1>
            <h1> <i className="ri-zoom-in-line text-green-400"></i> Zoom</h1>
            <h1> <i className="ri-puzzle-line text-green-400"></i> Manage Extension</h1>
            <h1> <i className="ri-cookie-line text-green-400"></i> Manage Cookies</h1>
            <h1> <i className="ri-translate-2 text-green-400"></i> Translate</h1>
        </div>
        <button 
        onClick={()=> setdisplay(!display)}
        className='bg-red-500 rounded-full mt-5 w-8 h-8 text-amber-50 text-xl active:scale-95 font-bold'>
           <i className="ri-close-line"></i>
        </button>
    </div>
    </div>
  )
}

export default MenuBar
