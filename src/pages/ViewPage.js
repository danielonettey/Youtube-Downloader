import { AdjustmentsIcon, BellIcon, ShareIcon, ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ChannelIcon from '../assets/images/channels4_profile.jpeg'
import SideCard from '../components/SideCard'
import SampleImage from '../assets/images/hq720.webp'



const ViewPage = () => {
    const [subscribed, setSubscribed] = useState(false)
    const [showLess, setShowLess] = useState(false)
    const [title, setTitle] = useState('The Reds Win Down Under 🇦🇺 | Man Utd 4-1 Melbourne Victory | Highlights')

    return (
        <div className='md:px-5 lg:grid lg:grid-cols-3 lg:gap-4'>
            <div className='md:col-span-2'>
                {/* Video  */}
                <div>
                    <ReactPlayer className="!w-full md:!h-[500px]" url={'https://www.youtube.com/watch?v=Ft5acImIVnE&t=4s&ab_channel=ManchesterUnited'} controls={true} />
                </div>

                <div className='mt-2 px-3'>
                    <p className='text-blue-500 text-xs -mb-1'>#MUFC</p>
                    <p className='text-sm md:text-lg font-medium'>
                        {title}
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
                            <div>
                                <img src={ChannelIcon} className='w-11' />
                            </div>
                            <div>
                                <p className='text-xs md:text-sm text-black font-medium line-clamp-2'>Manchester United</p>
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
                        <div className={`${showLess ? 'truncate' : 'whitespace-pre-wrap'} `}>
                            Manchester United got off to a great start in Australia after beating Melbourne Victory 4-1 at the MCG! ✅

                            An own goal, plus goals from Scott McTominay, Anthony Martial and Marcus Rashford saw off an early opener from Victory 👏

                            Watch all MUTOUR22 games live on the Man Utd app: https://bit.ly/3yIxkCb 📲

                            Subscribe to Manchester United on YouTube at http://bit.ly/ManU_YT
                            Visit Manchester United at http://www.manutd.com
                            👍 Like Manchester United on Facebook at http://www.facebook.com/manchesterunited
                            📲 Follow Manchester United on Twitter at http://www.twitter.com/ManUtd
                            📸 Follow Manchester United on Instagram at http://www.instagram.com/manchesterun...
                            🎥 Subscribe to MUTV at https://bit.ly/2L9ymRs

                            #MUFC
                        </div>

                        <button className=' uppercase text-[10px] md:text-xs py-1 md:py-3' onClick={() => setShowLess(!showLess)}>
                            {
                                showLess ? 'show more' : 'show less'
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Other Videos  */}
            <div className='pr-5 px-3'>
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

export default ViewPage