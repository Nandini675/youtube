import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const   isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
 // early return
  if(!isMenuOpen) return null;

  
  return (
    <div className='shadow-lg w-48 pl-6'>
  <ul>
    <li> <Link to= "/">Home </Link></li>
    <li>Shorts</li>
    <li>Subscription</li>
      <li>Videos</li>
  </ul>

<h1 className='font-bold pt-5'>YOU</h1>
<ul>
    <li>Your channel</li>
    <li>Playlist</li>
    <li>Your videos</li>
    <li>watch later</li>
  </ul>
<h1 className='font-bold pt-5'>Subscription</h1>
<ul>  
    <li>love babar</li>
    <li> code with harry</li>
    <li>gopali</li>
  </ul>

    </div>

  )
}

export default Sidebar;