import React from 'react'
import { useQuery } from 'react-query';
import { request, requestOffline } from '../utils/axios-utils';


const fetchYouTubeSearchData = ({ queryKey }) => {
    const contentID = queryKey[1];

    return requestOffline({url: '/search'})
}

const useYouTubeSearchData = (search) => {
  return useQuery(['searchData', search], fetchYouTubeSearchData, {
    cacheTime: 5 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
})
}

export default useYouTubeSearchData
