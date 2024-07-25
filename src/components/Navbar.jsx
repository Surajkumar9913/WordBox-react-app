import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div
            className='flex justify-around items-center font-medium text-xl py-3  text-gray-800 bg-green-400 shadow-[0_4px_8px_rgba(0,255,0,0.2)]'
        >
            <div>
                <NavLink to="/" ><i className="fa-regular fa-file-word mr-1 "></i>WordBox</NavLink >
            </div>
            <ul className='flex gap-5 text-slate-600'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
