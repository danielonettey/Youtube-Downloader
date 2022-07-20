import { SearchIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";

import Logo from '../../assets/dantubeLogo.png';
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useGoogleLogin, googleLogout } from '@react-oauth/google'


const SideBar = () => {
    const [searchText, setSearchText] = useState('')
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('token') != null)
    const [sideBar, setSideBar] = useState(false)
    let navigate = useNavigate()

    const LogOut = () => {
        googleLogout();
        sessionStorage.clear();
        setLoggedIn(false);
    }

    const LogIn = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            sessionStorage.setItem('token', tokenResponse.access_token);
            setLoggedIn(true)
        },
        onError: error => console.log(error),
        scope: 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly'
    });

    const SearchTerm = (e) => {
        e.preventDefault();
        console.log('seraching')
        navigate(`/search/${searchText}`)
    }

    
    return (
        <div className="h-full w-screen flex">

            {/* Top Bar  */}
            <div className="bg-white fixed h-16 px-3 w-full z-40">
                {/* Logo | Menu */}
                <div className="p-2  text-black  absolute top-3 md:top-1 left-2 flex space-x-1 " >
                    <button onClick={() => setSideBar(!sideBar)}>
                        <MenuIcon className="w-6" />
                    </button>
                    <button onClick={() => navigate('/')}>
                        <img src={Logo} className='w-24 hidden md:block' />
                    </button>
                </div>

                {/* Search Bar  */}
                <form className="w-full h-full flex justify-center items-center" onSubmit={SearchTerm}>
                    <input className="p-2 rounded-l border focus:outline-none w-3/5 md:w-2/5" type={'text'} placeholder='Search'
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button className="rounded-r border p-2 bg-gray-100"  onClick={SearchTerm}>
                        <SearchIcon className="w-6 " />
                    </button>
                </form>

                {/* Login | Logout Button  */}
                <div className="p-2  text-black  absolute top-3 md:top-1 right-2 flex space-x-1 " >
                    {loggedIn ? <LogoutButton logout={LogOut} /> : <LoginButton login={LogIn} />}
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
