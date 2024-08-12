import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closedMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Commentconatiner from './Commentconatiner';
import Livechat from './Livechat';

const Watchpage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect (()=>{
dispatch(closedMenu());

    },[])
  return (
    <div className="w-full">
      <div className='px-5 flex  '>
        <div>
        <iframe width="800" height="350" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullscreen></iframe>
        </div>
        
        <div className='w-full'>
          <Livechat/>
        </div>
        </div>
        <Commentconatiner/>
        </div>
  )
}

export default Watchpage