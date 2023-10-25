import { useEffect } from "react";
import { YT_API } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addVideoData } from "../redux/videoSlice";

const useYoutubeVideos = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async ()=>{
        const data = await fetch(YT_API);
        const json = await data.json();
        dispatch(addVideoData(json.items));
    };
}



export default useYoutubeVideos;