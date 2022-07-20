import React from 'react'
import { useNavigate } from 'react-router-dom'


const SearchCard = ({ title, duration, searchTerm, videoId, image, views, date, channelName, channelIcon, description }) => {
    let navigate = useNavigate()
    
    return (
        <div>
            <button className='mb-5 w-full cursor-pointer grid grid-cols-5 gap-2 md:gap-4 text-left' 
            onClick={() => navigate(`/view/${searchTerm}/${videoId}`)}>
                {/* Image  */}
                <div className='relative col-span-2'>
                    <img src={image} className='w-full h-auto' />
                    <div className='absolute right-1 bottom-1 px-2 py-1 bg-black text-white text-xs'>
                        {duration}
                    </div>
                </div>

                {/* Content  */}
                <div className='col-span-3'>
                    {/* Title  */}
                    <div className=''>
                        <p className='text-black text-[12px] leading-4 line-clamp-2 md:text-xl font-medium '>
                            {title}
                        </p>

                        {/* Views  */}
                        <div className='flex md:pt-1 items-center text-[10px] md:text-xs space-x-1 md:space-x-2'>
                            <p>{views} views</p>
                            <div className='w-1 h-1 rounded-full bg-[#606060]'></div>
                            <p>{date} ago</p>
                        </div>

                        {/* Channel Info  */}
                        <div className='text-[10px] md:text-sm md:py-3 text-[#606060] flex space-x-0.5 items-center'>
                            <img src={channelIcon} className='w-6 md:w-9' />
                            <p className='hover:text-black font-medium'>
                                {channelName}
                            </p>
                        </div>

                        {/* Video description */}
                        <div className='hidden md:block'>
                            <p className='text-sm whitespace-nowrap w-full truncate '>
                                {description}
                            </p>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default SearchCard