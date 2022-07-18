import React from 'react'
import SampleImage from '../assets/images/hq720.webp'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/sidebar/SideBar'
import HomeCard from '../components/HomeCard'
import { Oval } from 'react-loader-spinner'
import useYouTubeSearchData from '../hooks/useYouTubeSearchData'

const HomePage = () => {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 pb-20 px-5'>
            {
                data?.data.items.map((result) => (
                    <HomeCard key={result.etag} videoId={result.id.videoId} title={result.snippet.title} duration={'10:02'}
                        image={result.snippet.thumbnails.medium.url} views={'119K'} date={result.snippet.publishedAt} channelName={result.snippet.channelTitle} channelIcon={ChannelIcon}/>
                ))
            }
            
            <HomeCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} channelIcon={ChannelIcon} />
        </div>
    )
}





export default HomePage