import {useState, useEffect } from "react";
import {YT_SEARCH} from '../utilities/constants';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cacheResults } from "../redux/searchSlice";



const useHead = ()=>{
    const searchRes = useSelector((store)=>store.search);
    const dispatch = useDispatch();
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestions , setSuggestions] = useState([]);
    const [showSugg , setShowSugg] = useState(false);
    useEffect(()=>{
        // setting up timer and will destrory it with comp if useEff is called withing this time
        // debouncing
        const timer = setTimeout(()=>{
            if(searchRes[searchQuery]) {
                setSuggestions(searchRes[searchQuery][0])
            }
            else{
                handleSearchQuery(searchQuery)
            }
            },200);
            

        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery])

    const handleSearchQuery = async (searchQuery)=>{
        const data  = await fetch(YT_SEARCH+searchQuery);
        const json = await data.json();
        dispatch(cacheResults({[searchQuery]:[json[1]]}))
        setSuggestions(json[1]);  
    }
    return {searchQuery , setSearchQuery , suggestions, showSugg , setShowSugg};
    
}
export default useHead;