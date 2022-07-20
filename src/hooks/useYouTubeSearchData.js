import React from 'react'
import { useQuery } from 'react-query';
import { request, requestOffline } from '../utils/axios-utils';


const fetchYouTubeSearchData = ({ queryKey }) => {
    const searchText = queryKey[1];

    return request({url: `/search?part=snippet&maxResults=10&q=${searchText}&type=video&key=${process.env.REACT_APP_DANTUBE_API_KEY}`})
}

const useYouTubeSearchData = (searchText) => {
  return useQuery(['searchData', searchText], fetchYouTubeSearchData, {
    cacheTime: 5 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
})
}

export default useYouTubeSearchData
