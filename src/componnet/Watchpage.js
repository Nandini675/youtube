import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closedMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Commentconatiner from './Commentconatiner';

const Watchpage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect (()=>{
dispatch(closedMenu());

    },[])
  return (
    <div>
      <div className='px-5'>
        <iframe width="800" height="350" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullscreen></iframe>
        </div>
        <Commentconatiner/>
        </div>
  )
}

export default Watchpage