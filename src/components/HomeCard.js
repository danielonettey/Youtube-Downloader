import React from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/sidebar/SideBar'

const HomeCard = ({ title,videoId, duration, image, views, date, channelName, channelIcon }) => {
    let navigate = useNavigate()
    return (
        <button className='mb-5 cursor-pointer text-left' onClick={() => navigate(`view/${videoId}`)}>
            <div className='relative'>
                <img src={image} className='w-full' />
                <div className='absolute right-1 bottom-1 px-2 py-1 bg-black text-white text-xs'>
                    {duration}
                </div>
            </div>
            <div className='flex pt-2 space-x-1'>
                <div className='flex-none'>
                    <img src={channelIcon} className='w-10' />
                </div>
                <div className=''>
                    <p className='text-black text-sm font-medium leading-4 line-clamp-2'>
                        {title}
                    </p>
                    <div className='text-xs pt-1 text-[#606060]'>
                        <p className='hover:text-black'>
                            {channelName}
                        </p>
                        <div className='flex items-center space-x-2'>
                            <p>{views} views</p>
                            <div className='w-1 h-1 rounded-full bg-[#606060]'></div>
                            <p>{date} ago</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </button>
    )
}

export default HomeCard