import React from 'react'
import VideoCard from './VideoCard';
import useYoutubeVideo from '../hooks/useYoutubeVideos';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  useYoutubeVideo();
  const data = useSelector((store)=>store?.videos.videoData);
  if(data===null) return
  
  return (
    <div className='flex flex-wrap'>
        {data.map((video)=><VideoCard key = {video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer;