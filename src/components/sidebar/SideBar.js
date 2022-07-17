import { SearchIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";

import Logo from '../../assets/dantubeLogo.png';

const SideBar = () => {
    const [searchText, setSearchText] = useState('')
    const [sideBar, setSideBar] = useState(false)

    let navigate = useNavigate()
    return (
        <div className="h-full w-screen flex">

            {/* Top Bar  */}
            <div className="bg-white fixed h-16 px-3 w-full z-40">
                <div className="p-2  text-black  absolute top-2 left-2 flex space-x-1 " >
                    <button onClick={() => setSideBar(!sideBar)}>
                        <MenuIcon className="w-6" />
                    </button>
                    <button onClick={() => navigate('/')}>
                        <img src={Logo} className='w-24 hidden md:block' />
                    </button>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <input className="p-2 rounded-l border focus:outline-none w-3/5" type={'text'} placeholder='Search'
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button className="rounded-r border p-2 bg-gray-100">
                        <SearchIcon className="w-6 " />
                    </button>
                </div>
            </div>

            {/* Side Bar  */}
            {sideBar &&
                <div className="bg-white fixed h-screen px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-1000 ease-in-out ">
                    <button className="p-2  text-black  absolute top-3 left-2 flex space-x-1" onClick={() => setSideBar(!sideBar)}>
                        <MenuIcon className="w-6" />
                        <p className="font-medium">DanTube</p>
                    </button>

                </div>
            }


            {/* Main body */}
            <div className="flex pt-20  w-full min-h-screen bg-gray-50">
                {sideBar && <div className="w-30 md:w-60 lg:w-60 h-screen"></div>}
                <Outlet />
            </div>
        </div>


    );
};

export default SideBar;
