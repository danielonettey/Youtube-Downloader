import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/dantubeLogo.png';


const Navbar = () => {
    let navigate = useNavigate();

    const navLinks = [
        {
            name: 'About',
            path: ''
        },
        {
            name: 'Experience',
            path: ''
        },
        {
            name: 'Skills',
            path: ''
        },
        {
            name: 'Projects',
            path: ''
        },
    ]
    return (
        <div className='container flex fixed justify-between items-center py-5 bg-backColor z-50'>
            <div className='w-10 h-10 rounded-full border  border-secondary flex items-center justify-center'>
                <p className='text-secondary font-medium text-xl'>D</p>
            </div>
            <div className='flex items-center space-x-10'>
                {
                    navLinks.map((navLink, index) => (
                        <button className='font-medium hover:text-[#8A93AD] py-2' onClick={() => navigate(navLink.path)}>
                            <span className='text-secondary'>{"0" + (index + 1) + ". "}</span>
                            {navLink.name}
                        </button>
                    ))
                }
                <a href='mailto:dnettey3@gmail.com' className='font-medium border border-secondary text-secondary px-4 rounded py-2'>
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default Navbar