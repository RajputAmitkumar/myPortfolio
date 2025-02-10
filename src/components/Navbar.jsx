import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    
    <nav className='flex items-center justify-between '>
        <div className='selection: bg-slate-500 '>
            R-A-K-R
        </div>
        <div className='flex'>

        <FaLinkedin/>
        <FaInstagram />
        <FaSquareTwitter/>
        <FaGithub/>
        </div>
    </nav>
  )
}

export default Navbar
