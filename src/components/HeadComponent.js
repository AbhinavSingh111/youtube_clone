import { useDispatch } from "react-redux";
import { YT_LOGO , HAM_MENU, USER_LOGO } from "../utilities/constants";
import {toggleMenu} from '../redux/appSlice';
import useHead from "../hooks/useHead";


const HeadComponent = ()=>{
    const {searchQuery , setSearchQuery ,suggestions, showSugg , setShowSugg } = useHead();
    const dispatch = useDispatch();
    const handleHamClick = ()=>{
        dispatch(toggleMenu()); 
    }
    
    return (
        <div className="grid grid-flow-col p-5 bg-white">
            <div className="flex col-span-1">
                <img className="h-8 hover:cursor-pointer hover:opacity-60" onClick={handleHamClick}src={HAM_MENU} alt="menu" />
                <a href="/"><img className="h-8 mx-2" src={YT_LOGO} alt="logo" /></a>
            </div>
            <div className=" col-span-10 relative">
                <div className="text-center">
                    <input  onFocus={()=>setShowSugg(true)} onBlur={()=>setShowSugg(false)} className=" px-5 w-1/2 p-1 border border-gray-400 rounded-l-full hover:cursor-pointer hover:opacity-60" type="text" value={searchQuery}   onChange={(e)=>setSearchQuery(e.target.value)}/>
                    <button className="px-5 bg-gray-100 border border-gray-400 p-1 rounded-r-full hover:cursor-pointer hover:opacity-60">🔍</button>
                </div>
                
                {showSugg && suggestions.length > 0 ?(<div className="fixed bg-white py-2 px-3 w-[35rem] left-[31%] shadow-lg rounded-xl border border-gray-200 ">
                    <ul>
                        {suggestions.map((s)=>(<li key={s} className="py-1 hover:cursor-pointer hover:bg-gray-200">🔍 {s}</li>))}
                    </ul>
                </div>):(null)}
            </div>
            <div className=" col-span-1">
                <img className="h-8 " src={USER_LOGO} alt="user" />
            </div>
        </div>    
    );
};

export default HeadComponent;