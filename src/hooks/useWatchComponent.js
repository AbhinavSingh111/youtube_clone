import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu} from "../redux/appSlice";

const useWatchComponent = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    
};

export default useWatchComponent;