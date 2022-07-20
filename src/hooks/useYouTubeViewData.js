import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { request, requestOffline } from '../utils/axios-utils';


const fetchYouTubeViewData = ({ queryKey }) => {
    const videoId = queryKey[1];

    return requestOffline({ url: `/youtube/${videoId}` })
}

const useYouTubeViewData = (videoId) => {
    const queryClient = useQueryClient();

    return useQuery(['searchData', videoId], fetchYouTubeViewData, {
        cacheTime: 5 * 60 * 1000,
        staleTime: 5 * 60 * 1000,
        initialData: () => {
            const hero = queryClient.getQueryData(['downloadedVideos'])?.data
            .items.find((video) => video.id.videoId ===videoId)

            if(hero){
                return hero
            }else{
                return undefined
            }
        }
    })
}

export default useYouTubeViewData



