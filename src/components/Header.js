import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions ] = useState(false);

  const searchCache =  useSelector ((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() =>
    {
      if(searchCache[searchQuery])
      {
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSugsestions();
      }
    } 
    , 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("test",json[1]);
    setSuggestions(json[1]);

dispatch(
  cacheResults({
    [searchQuery]: json[1],
  })
)

  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          className="h-10 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="Vtube-logo"
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1611931409/g1miy7bmxbj0cjfwlx0l.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 w-1/2 p-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            

            />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 ">
            Search
          </button>
        </div>
        {showSuggestions && (
 <div className="fixed bg-white py-2 px-5 w-[34rem] shadow-lg rounded-lg border border-gray-100">
 <ul>
  {suggestions && suggestions.map((s) => (
<li key={s} className="py-2 shadow-sm hover:bg-gray-100 ">
 {s}
 </li>
  ))}
 </ul>
</div>
        )}
       
      </div>
      <div className="col-span-1">
        <img
          className="h-8 "
          alt="usericon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Header;
