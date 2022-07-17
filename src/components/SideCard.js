import React from 'react'
import { useNavigate } from 'react-router-dom'


const SideCard = ({ title, duration, image, views, date, channelName }) => {
    let navigate = useNavigate()
    return (
        <button className='mb-5 cursor-pointer grid grid-cols-5 gap-2 text-left w-full' onClick={() => navigate('/view')}>
            {/* Image  */}
            <div className='relative col-span-2'>
                <img src={image} className='w-full' />
                <div className='absolute right-0.5 bottom-0.5 px-2 py-1 bg-black text-white text-[10px]'>
                    {duration}
                </div>
            </div>

            {/* Content  */}
            <div className='col-span-3'>
                {/* Title  */}
                <div className=''>
                    <p className='text-black text-xs md:text-sm leading-4 line-clamp-2 font-medium '>
                        {title}
                    </p>

                    {/* Channel Info  */}
                    <div className='text-[10px] md:text-xs md:pt-1 text-[#606060] '>
                        <p className='hover:text-black font-medium truncate'>
                            {channelName}
                        </p>
                    </div>

                    {/* Views  */}
                    <div className='flex items-center text-[10px] md:text-xs space-x-2 truncate\'>
                        <p>{views} views</p>
                        <div className='w-1 h-1 rounded-full bg-[#606060]'></div>
                        <p>{date} ago</p>
                    </div>





                </div>
                <div>
                </div>
            </div>
        </button>
    )
}

export default SideCard