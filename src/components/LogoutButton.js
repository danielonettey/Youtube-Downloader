import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = ({logout}) => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className='relative' onMouseOver={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
            <button className='rounded-full mr-5 text-sm w-11 h-11 bg-red-500 text-white font-medium flex items-center justify-center space-x-1' >
                <p>D</p>
            </button>

            {showDropDown &&
                <div class="origin-top-right -mt-5 absolute right-5 z-40  focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                    <button className={`w-full mt-6 rounded flex justify-center py-1 px-3 text-left border border-[#D1C8C8] bg-white  text-sm text-[#3A3A3A] hover:bg-primary/10 items-center`}
                        onClick={logout}>
                        <p>Logout</p>
                    </button>
                </div>
            }
        </div>
    )
}

export default LogoutButton