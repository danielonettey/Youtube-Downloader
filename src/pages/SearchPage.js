import React from 'react'
import SampleImage from '../assets/images/hq720.webp'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import SearchCard from '../components/SearchCard'


const SearchPage = () => {
    return (
        <div className='px-20 pb-3  min-h-screen'>

            {/* Filters  */}
            <div className=' border-b border-gray-400 mb-5 py-2 flex items-end space-x-1 cursor-pointer text-[#606060] hover:text-black '>
                <AdjustmentsIcon className='w-6' />
                <p className='text-sm font-medium'>FILTERS</p>
            </div>

            <SearchCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} />
            <SearchCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} />
            <SearchCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} />

        </div>
    )
}

export default SearchPage