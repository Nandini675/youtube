import React, { useEffect, useRef, useState } from 'react'
const Demo2 = () => {
 const [y,sety]= useState(0);
    let x= 0;
     const z= useRef(0);
     
    console.log("rendering");
    const i = useRef(null);
    useEffect(()=>{
        if(i.current) return;
       i.current= setInterval(()=>{console.log(
    "namste broo",Math.random());
},1000)

    },[])

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        
        <div>
            <button className="bg-green-200 p-2 m-4" onClick={()=>{
              x= x+1;  
             console.log(x); 
            }}>increase x</button>
           <span className=' font-bold text-xl'>let ={x}</span> 
        
           
        </div>
        <div>
            <button className="bg-green-200 p-2 m-4" onClick={()=>{
              sety(y+1);  
             
            }}>increase y</button>
           <span className=' font-bold text-xl'>State ={y}</span> 
        
           
        </div>
        <div>
            <button className="bg-green-200 p-2 m-4" onClick={()=>{
              z.current= z.current+1;  
              console.log("z=", z.current);
             
            }}>increase z</button>
           <span className=' font-bold text-xl'>Ref ={z.current}</span> 
        
           
        </div>
        <button className=' bg-red-700 p-4 m-4 text-white font-bold rounded-lg'
        onClick={()=>{clearInterval(i.current)}}
        
        >Stop Printing</button>
</div>
  )
}

export default Demo2