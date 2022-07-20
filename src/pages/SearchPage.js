import React from 'react'
import SampleImage from '../assets/images/hq720.webp'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import SearchCard from '../components/SearchCard'
import useYouTubeSearchData from '../hooks/useYouTubeSearchData'
import { Oval } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { isError } from 'react-query'
import { GlobeAltIcon } from '@heroicons/react/outline'


const SearchPage = () => {
    const { searchTerm } = useParams();

    const { isLoading, data, isError, isFetched } = useYouTubeSearchData(searchTerm);

    if (isLoading) {
        return <div className='w-full flex justify-center min-h-screen'>
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

    if (isError) {
        return (
            <div className='w-full h-80 flex flex-col justify-center items-center'>
                <GlobeAltIcon className='w-20 text-primary' />
                <p className='text-lg text-center mt-2'>Something is wrong, Please check your internet connection <br /> and try again</p>
            </div>
        )
    }


    return (
        <div className='px-5 mx-auto md:max-w-5xl pb-3  min-h-screen'>

            {/* Filters  */}
            <div className=' border-b border-gray-400 mb-5 w-full py-2 flex items-end space-x-1 cursor-pointer text-[#606060] hover:text-black '>
                <AdjustmentsIcon className='w-6' />
                <p className='text-sm font-medium'>FILTERS</p>
            </div>

            {/* Check if the data is valid */}
            {data?.data?.items != null ?
                data?.data?.items?.map((result) => (
                    <SearchCard key={result.etag} searchTerm={searchTerm} videoId={result.id.videoId} title={result.snippet.title} duration={'10:02'}
                        image={result.snippet.thumbnails.medium.url} views={'119K'} date={result.snippet.publishedAt} channelName={result.snippet.channelTitle} channelIcon={ChannelIcon} description={result.snippet.description} />
                )) :
                <div className='w-full h-80 flex flex-col justify-center items-center'>
                    <GlobeAltIcon className='w-20 text-primary' />
                    <p className='text-lg text-center mt-2'>Something is wrong, Please sign in to view results <br /></p>
                </div>
            }

            {/* <SearchCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} /> */}
        </div>
    )
}

export default SearchPage