import { AdjustmentsIcon, BellIcon, ShareIcon, ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import SideCard from '../components/SideCard'
import SampleImage from '../assets/images/hq720.webp'
import { useParams } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import useYouTubeViewData from '../hooks/useYouTubeViewData'
import { Oval } from 'react-loader-spinner'



const ViewPage = () => {
    const [subscribed, setSubscribed] = useState(false)
    const [showLess, setShowLess] = useState(false)
    const [title, setTitle] = useState('The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights')

    const { videoId } = useParams()

    const queryClient = useQueryClient();
    const video = queryClient.getQueryData(['searchData', 'man u'])?.data.items.find((video) => video.id.videoId === videoId)


    // const { isLoading, hero } = useYouTubeViewData(videoId);

    // if (isLoading) {
    //     return <div className=' w-full flex justify-center min-h-screen'>
    //         <Oval
    //             ariaLabel="loading-indicator"
    //             height={50}
    //             width={50}
    //             strokeWidth={1}
    //             strokeWidthSecondary={2000}
    //             color="blue"
    //             secondaryColor="red"
    //         />
    //     </div>
    // }


    return (
        <div className='md:px-5 lg:grid lg:grid-cols-3 lg:gap-4'>
            <div className='md:col-span-2'>
                {/* Video  */}
                <div>
                    <ReactPlayer className="!w-full md:!h-[500px]" url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} />
                </div>

                <div className='mt-2 px-3'>
                    <p className='text-blue-500 text-xs -mb-1'>#MUFC</p>
                    <p className='text-sm md:text-lg font-medium'>
                        {video?.snippet.title}
                    </p>

                    <div className='flex justify-between items-center md:items-start border-b text-xs md:text-sm py-1 md:py-2 mb-2'>
                        <div className='flex items-center space-x-2'>
                            <p>123,123 views</p>
                            <div className='w-1 h-1 rounded-full bg-[#606060]'></div>
                            <p> July 15, 2020</p>
                        </div>

                        {/* Actions */}
                        <div className='flex space-x-3 md:space-x-6 pb-2'>
                            <button className='flex space-x-1  items-end uppercase'>
                                <ThumbUpIcon className='w-5' />
                                <p className='hidden md:block'>37K</p>
                            </button>

                            <button className='flex space-x-1 items-end uppercase'>
                                <ThumbDownIcon className='w-5' />
                                <p className='hidden md:block'>Dislike</p>
                            </button>

                            <button className='flex space-x-1 items-end uppercase'>
                                <ShareIcon className='w-5' />
                                <p className='hidden md:block'>share</p>
                            </button>

                            <button className='flex space-x-1 items-end uppercase'>
                                <AdjustmentsIcon className='w-5' />
                                <p className='hidden md:block'>save</p>
                            </button>

                            <button>
                                <DotsHorizontalIcon className='w-5' />
                            </button>
                        </div>
                    </div>

                    {/* Channel Info  */}
                    <div className='mt-2 flex justify-between'>
                        <div className='flex space-x-1 md:space-x-3 items-center'>
                            <div className='f'>
                                <img src={ChannelIcon} className='w-11' />
                            </div>
                            <div>
                                <p className='text-xs md:text-sm text-black font-medium line-clamp-2'>{video?.snippet.channelTitle}</p>
                                <p className='text-[#606060] text-[10px] md:text-xs'>6.26M subscribers</p>
                            </div>
                        </div>

                        {/* subscribed */}
                        <div className='flex items-center space-x-1'>
                            <button className={`py-2 px-3 md:px-5 uppercase text-xs md:text-sm font-medium ${!subscribed ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`} onClick={() => setSubscribed(!subscribed)}>
                                {!subscribed ? 'subscribe' : 'subscribed'}
                            </button>
                            {subscribed && <BellIcon className='w-6' />}
                        </div>
                    </div>

                    {/* Description  */}
                    <div className='md:pl-14 mt-4 md:mr-32 text-xs md:text-sm border-b mb-5 md:mb-0'>
                        <p className={`${showLess ? 'truncate' : 'whitespace-pre-wrap'} `}>
                            {video?.snippet.description}
                        </p>

                        <button className=' uppercase text-[10px] md:text-xs py-1 md:py-3' onClick={() => setShowLess(!showLess)}>
                            {
                                showLess ? 'show more' : 'show less'
                            }
                        </button>
                    </div>

                    {/* Comments  */}
                    <div className='mt-2 '>
                        <p className='font-medium py-4'>681 Comments</p>
                        <div className='space-y-5'>
                            <CommentCard name={'Carlos Nunes'} date={'5 hours'} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel cursus mi. Etiam viverra dapibus augue, a luctus quam dictutiam viverra dapibus augue, a luctus quam dictum ut. ' />

                            <CommentCard name={'Carlos Nunes'} date={'5 hours'} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel cursus mi. Etiam viverra dapibus augue, a luctus quam dictum ut. Ut sed venenatis dui. Fusce imperdiet justo quis turpis sagittis, quis finibus augue efficitur. Nam interdum purus mattis dignissim condimentum. Duis dictum dui eu finibus ultricies. Nulla facilisi. Ut euismod enim fermentum nulla venenatis, at gravida erat sodales. Sed blandit lacinia eros eget semper.' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Videos  */}
            <div className='pr-5 px-3'>
                <div>
                    <p className='font-medium py-5 md:pt-2'>
                        Recommended Videos
                    </p>
                </div>
                
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />
                <SideCard title={'The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights'} duration={'10:02'}
                    image={SampleImage} views={'119K'} date={'3 hours'} channelName={'Manchester United'} />

            </div>
        </div>
    )
}

export const CommentCard = ({ name, date, comment }) => {
    return (
        <div className='flex space-x-2'>
            <div className='uppercase rounded-full w-9 h-9 bg-yellow-400 flex flex-none items-center justify-center'>
                {name[0]}
            </div>

            <div className='w-auto'>
                <p className='font-medium text-[13px] pb-1 text-[#606060]'> {name} <span className='font-normal'>{date} ago</span></p>
                <p className='text-[13px] leading-4'>
                    {comment}
                </p>
            </div>
        </div>
    )
}


export default ViewPage