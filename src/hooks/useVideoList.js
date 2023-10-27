// import { useEffect, useState } from "react";
// import useHead from "./useHead";
// import { YT_LIST_API, GOOGLE_API } from "../utilities/constants";

// const useVideoList = ()=>{
//     const {searchQuery } = useHead();
//     const [searchData , setSearchData] = useState(null);

//     useEffect(()=>{
//         fetchSearchList();
//     },[])

//     const fetchSearchList = async () => {
//         const data = await fetch(YT_LIST_API+searchQuery+"race&key="+GOOGLE_API);
//         const json  = await data.json();
//         setSearchData(json?.items)
//     }
//     return searchData;
// }
// export default useVideoList;
