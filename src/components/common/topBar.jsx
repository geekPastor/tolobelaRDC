import React, { useState } from "react";
import { 
    AiOutlineSearch, 
    AiOutlineUserSwitch, 
    AiOutlineHome, 
    AiOutlineMessage
} from "react-icons/ai"

import { IoIosNotificationsOutline } from "react-icons/io"

import user from "../../assets/user.png"
import logo from "../../assets/logo.jpg"

export default function TopBar(){

    
    let [open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='cursor-pointer flex items-center'>
                <img src={logo} alt="#" className="object-cover h-14 w-14 hover:cursor-pointer"/>
                <h1 className="text-xl font-bold uppercase">
                    Tolobela-RDC
                </h1>
                </div>
                
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                 <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
        
                <ul className={`md:flex md:items-center md:pb-0 pb-12 justify-space absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    <div className="flex">
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <AiOutlineSearch className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer text-4xl'/>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <AiOutlineHome className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer text-4xl'/>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <AiOutlineUserSwitch className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer text-4xl'/>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <AiOutlineMessage className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer text-4xl'/>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <IoIosNotificationsOutline className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer text-4xl'/>
                    </li>
                    </div>
                </ul>

                <img src={user} alt="#" className="object-cover h-14 w-14 rounded-full hover:cursor-pointer"/>
            </div>
        </div>
    )

    // 2:23:03
}