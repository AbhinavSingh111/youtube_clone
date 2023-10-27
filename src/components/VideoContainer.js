import React from 'react'
import VideoCard from './VideoCard';
import useYoutubeVideo from '../hooks/useYoutubeVideos';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchVideoCard from './SearchVideoCard';

const VideoContainer = () => {
  useYoutubeVideo();
  const data = useSelector((store)=>store?.videos.videoData);
  const searchData = useSelector((store)=>store?.searchVideos?.searchVideoData);
  if(data===null) return
  // if(searchData===null) return
  
  return (
    <div className='flex flex-wrap'>
        {searchData !== null ?(searchData.map((video)=>(
            <Link key = {video.id.videoId} to={"/watch/?v="+video.id.videoId}>
              <SearchVideoCard  info={video}/>
            </Link>))):
            (data.map((video)=>(
              <Link key = {video.id} to={"/watch/?v="+video.id}>
                <VideoCard  info={video}/>
              </Link>))
            )
        }
    </div>
  )
}

export default VideoContainer;