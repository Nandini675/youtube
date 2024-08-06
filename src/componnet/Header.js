import React, { useEffect } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/Constant';
import { cacheResults } from '../utils/searchSlice';
import { useSelector } from 'react-redux';
const Header = () => {

const [searchquery, setsearchquery] = useState("");
const [suggestion,setsuggestion] = useState([]);
const [showsuggestions,setshowsuggestions]= useState(false);// taki jab sech baar pr focus kre tabhi vo suggestion wala khule
 const searchcache= useSelector(store => store.search);

 useEffect(()=>{
  const timer=setTimeout(()=>{
    if(searchcache[searchquery]){
      setsuggestion(searchcache[searchquery]);
    }
    else{
      getsearchsuggestion()
    }
   },200);
return () =>{
  clearTimeout(timer);
};
 },[searchquery])// need to make an api call every tym my seach query change
  
 
 const getsearchsuggestion =async()=>{
    console.log("API CALL -" +searchquery);
    const data= await fetch(YOUTUBE_SEARCH_API+searchquery)
     const json= await data.json();
     setsuggestion(json[1]);
     // update the cache; 
     dispatch(cacheResults({
      [searchquery]:json[1],
     }));


  }
  const dispatch = useDispatch();
  const togglemenuhandler =()=>{
     dispatch(toggleMenu())
   }
  return (
    <div className=' grid grid-flow-col p-5 m-2 pt-1  h-12 shadow-lg'>
        <div className="flex col-span-1 ">

      
        <img className='  h-[10%] cursor-pointer '  
         alt="menu"  onClick={ ()=>togglemenuhandler()}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq8uf6ozVwXF1W0qK-Ax0U002LD7vnuExaQ&s"/>
        <img  className ="  h-[10%]  mx-2" 
        alt="logo"  
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"/> 
          </div>
          <div className='col-span-10  px-10'>
<div className="">
<input className=" px-5 w-1/2  p-2 border border-gray-400 rounded-l-full " type="text" 
placeholder="Search"
value= {searchquery}
 onChange={(e)=> setsearchquery(e.target.value)}
 onFocus={ ()=>setshowsuggestions(true)}
 onBlur={ ()=>setshowsuggestions(false)}
 
/> 
<button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>

</div>
{showsuggestions && (
<div className='fixed px-2 py-2  bg-white rounded-lg w-[25rem] shadow-lg  border border-gray-100'>
  <ul>
    {suggestion.map(s=> <li  key ={s}className='  px-3 py-2 shadow-sm hover:bg-gray-100'>🔍{s}</li>
)}
   

 
  </ul>
</div>)}
</div>
<div className='flex col-span-1 '>
    <img  className='h-8 px-4'
    alt=" notification"
    src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
    />
    <img className=' h-8 px-4'
     alt="usericon"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaJS0dnDYQ5NkVr30LWhCjQoMLtm6BC0TDA&s"
    />



</div>


    </div>
  )
  
}

export default Header;