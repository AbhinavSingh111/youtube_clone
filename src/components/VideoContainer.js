import React from 'react'
import VideoCard from './VideoCard';
import useYoutubeVideo from '../hooks/useYoutubeVideos';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useYoutubeVideo();
  const data = useSelector((store)=>store?.videos.videoData);
  if(data===null) return
  
  return (
    <div className='flex flex-wrap'>
        {data.map((video)=>(
        <Link key = {video.id} to={"/watch/?v="+video.id}>
          <VideoCard  info={video}/>
        </Link>))}
    </div>
  )
}

export default VideoContainer;