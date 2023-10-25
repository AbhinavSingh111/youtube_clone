import { useDispatch } from "react-redux";
import { YT_LOGO , HAM_MENU, USER_LOGO } from "../utilities/constants";
import {toggleMenu} from '../redux/appSlice';


const HeadComponent = ()=>{
    const dispatch = useDispatch();
    const handleHamClick = ()=>{
        dispatch(toggleMenu()); 
    }
    
    return (
        <div className="grid grid-flow-col p-5 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8 hover:cursor-pointer hover:opacity-60" onClick={handleHamClick}src={HAM_MENU} alt="menu" />
                <img className="h-8 mx-2" src={YT_LOGO} alt="logo" />
            </div>
            <div className=" col-span-10 text-center">
                <input className="w-1/2 p-1 border border-gray-400 rounded-l-full hover:cursor-pointer hover:opacity-60" type="text"/>
                <button className="px-5 bg-gray-100 border border-gray-400 p-1 rounded-r-full hover:cursor-pointer hover:opacity-60">🔍</button>
            </div>
            <div className=" col-span-1">
                <img className="h-8 " src={USER_LOGO} alt="user" />
            </div>
        </div>
        
    );
};

export default HeadComponent;