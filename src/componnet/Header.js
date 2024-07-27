import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
const Header = () => {
  const dispatch = useDispatch();
  const togglemenuhandler =()=>{
     dispatch(toggleMenu())
   }
  return (
    <div className=' grid grid-flow-col px-5 m-2   h-12 pt-1 '>
        <div className="flex col-span-1 ">

      
        <img className='  h-[10%] cursor-pointer '  
         alt="menu"  onClick={ ()=>togglemenuhandler()}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq8uf6ozVwXF1W0qK-Ax0U002LD7vnuExaQ&s"/>
        <img  className ="  h-[10%]  mx-2" 
        alt="logo"  
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"/> 
          </div>
          <div className='col-span-10 text-center '>
<input className="w-1/2  border p-2 border-gray-400 rounded-l-full " type="text"  placeholder="Search" /> 
<button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
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