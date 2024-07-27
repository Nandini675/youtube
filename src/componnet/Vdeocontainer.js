import React, {useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VDEO_API } from '../utils/Constant'
import Vdeocard from './Vdeocard';
const Vdeocontainer = () => {
 const [vdeos,setvdeos] = useState(null);
 const getvdeos =async()=>{
  const data= await fetch( YOUTUBE_VDEO_API);
    const json= await data.json();
 console.log(json.items);
    setvdeos(json.items);
 }
  useEffect(()=>{
 getvdeos();
},[])
  return (
    <div className=' flex flex-wrap'>
    
      { vdeos &&
      vdeos.map((video)=>(
      <Link to ={"/watch?v="+ video.id }>
      <Vdeocard  key={video.id} info={video}/> </Link>))
      }
 
    </div>
  )
}

export default Vdeocontainer