import React from 'react'
import SampleImage from '../assets/images/hq720.webp'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import SearchCard from '../components/SearchCard'
import useYouTubeSearchData from '../hooks/useYouTubeSearchData'
import { Oval } from 'react-loader-spinner'


const SearchPage = () => {

    const { isLoading, data } = useYouTubeSearchData('man u');

    if (isLoading) {
        return <div className=' w-full flex justify-center min-h-screen'>
            <Oval
                ariaLabel="loading-indicator"
                height={50}
                width={50}
                strokeWidth={1}
                strokeWidthSecondary={2000}
                color="blue"
                secondaryColor="red"
            />
        </div>
    }

    return (
        <div className='px-5 mx-auto md:max-w-5xl pb-3  min-h-screen'>

            {/* Filters  */}
            <div className=' border-b border-gray-400 mb-5 py-2 flex items-end space-x-1 cursor-pointer text-[#606060] hover:text-black '>
                <AdjustmentsIcon className='w-6' />
                <p className='text-sm font-medium'>FILTERS</p>
            </div>

            {
                data?.data.items.map((result) => (
                    <SearchCard key={result.etag} videoId={result.id.videoId} title={result.snippet.title} duration={'10:02'}
                        image={result.snippet.thumbnails.medium.url} views={'119K'} date={result.snippet.publishedAt} channelName={result.snippet.channelTitle} channelIcon={ChannelIcon} description={result.snippet.description} />
                ))
            }

            <SearchCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} />
        </div>
    )
}

export default SearchPage