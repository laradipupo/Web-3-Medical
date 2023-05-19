import React from 'react'
import { BsChatDots } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    const pathRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }
    const navigate = useNavigate()
    return (
        <>
            <nav className='flex justify-between items-center pt-5'>
                <div>
                    <ul className='flex items-center space-x-9 font-bold text-sm '>
                        <li className={`cursor-pointer text-base text-black ${pathRoute('/') && '!text-main-color'}`} onClick={() => navigate('/')}>MEDICAL</li>
                        <li className={`cursor-pointer text-black ${pathRoute('/about') && '!text-main-color'}`} onClick={() => navigate('/about')}>About Us </li>
                        <li className={`cursor-pointer text-black ${pathRoute('/doctors') && '!text-main-color'}`} onClick={() => navigate('/doctors')}>For Doctors</li>
                        <li>For Patient</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex items-center space-x-9 font-bold text-sm'>
                        <li>Help</li>
                        <li>Login</li>
                        <button className=' text-white bg-main-color py-[0.875rem] px-8 rounded-lg'>Get Started</button>
                        <button className=' text-white bg-main-color py-[0.875rem] px-7 rounded-lg text-lg'> <BsChatDots /></button>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar