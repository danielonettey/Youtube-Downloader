import React from 'react'
import { useQuery } from 'react-query';
import { request, requestOffline } from '../utils/axios-utils';


const fetchDownloadedVideosData = ({ queryKey }) => {
    const contentID = queryKey[1];

    return requestOffline({url: '/youtubeVideos'})
}

const useDownloadedVideosData = () => {
  return useQuery(['downloadedVideos'], fetchDownloadedVideosData, {
    cacheTime: 5 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
})
}

export default useDownloadedVideosData

