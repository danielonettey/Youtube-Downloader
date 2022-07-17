import React from 'react'
import { useNavigate } from 'react-router-dom'


const SearchCard = ({ title, duration, image, views, date, channelName, channelIcon, description }) => {
    let navigate = useNavigate()
    return (
        <div>
            <button className='mb-5 cursor-pointer grid grid-cols-5 gap-4 text-left' onClick={() => navigate('/view')}>
                {/* Image  */}
                <div className='relative col-span-2'>
                    <img src={image} className='w-full' />
                    <div className='absolute right-1 bottom-1 px-2 py-1 bg-black text-white text-xs'>
                        {duration}
                    </div>
                </div>

                {/* Content  */}
                <div className='col-span-3'>
                    {/* Title  */}
                    <div className=''>
                        <p className='text-black text-xl font-medium '>
                            {title}
                        </p>

                        {/* Views  */}
                        <div className='flex pt-1 items-center text-xs space-x-2'>
                            <p>{views} views</p>
                            <div className='w-1 h-1 rounded-full bg-[#606060]'></div>
                            <p>{date} ago</p>
                        </div>

                        {/* Channel Info  */}
                        <div className='text-xs py-3 text-[#606060] flex space-x-0.5 items-center'>
                            <img src={channelIcon} className='w-9' />
                            <p className='hover:text-black font-medium'>
                                {channelName}
                            </p>
                        </div>

                        {/* Video description */}
                        <div>
                            <p className='text-sm whitespace-nowrap w-full truncate '>
                                Sarah is the Lead Negotiator at Levels.fyi. Her goal is to help people make better career decisions and negotiate a salary they deserve. She's a former tech recruiter at Amazon, Facebook, and Google.
                                Check out Levels: https://www.levels.fyi/
                                Follow Zaheer (Levels.fyi co-founder): https://twitter.com/ziggym0
                                Zuhayeer (Levels.fyi co-founder): https://twitter.com/zuhayeer
                                To get expert help on negotiating
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