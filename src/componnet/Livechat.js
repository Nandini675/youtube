import React, { useEffect,useState } from 'react'
import Chatmsg from './Chatmsg';
import { addmsg } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generaterandomnames, makerandomstring } from '../utils/Helper';
const Livechat = () => {
  const [livemsg, setlivemsg] =useState("");
   const dispatch = useDispatch();
   const chatmsg =useSelector((store)=>store.chat.msg);

   useEffect (()=>{
  const i=   setInterval(()=>{
// api polling
console.log("api polling");
dispatch(addmsg({
  name:generaterandomnames(),
msg:  makerandomstring(20)+"🌠"
}

))
    },1500);
    // i need to clear the tym interval as well
return()=>clearInterval(i);

},[])
  
  
  return (
    <>
 <div className='ml-2  w-full h-[350px] p-2 border border-black
  bg-slate-100 rounded-lg overflow-y-scroll  flex flex-col-reverse'>
 
    {/* dont use indexes as keys */}
    <div>
{chatmsg.map((c,i)=> (<Chatmsg key = {i}
name={c.name}
msg={c.msg}
/>))}
</div>
</div>
<form className='w-full p-2 ml-2 border border-black' 
onSubmit={(e)=>{
  e.preventDefault();
  dispatch( addmsg({
name:"nandini",
msg:livemsg,
  }))
  setlivemsg("");// to make it clear 
}}>
  <input className=' px-2 w-80' type="text" value={livemsg}
  onChange={(e)=>{
    setlivemsg(e.target.value);
  }}
  />

  <button className='px-2 mx-2 bg-yellow-200'>Send</button>
</form>
    
    </>
  )
}

export default Livechat