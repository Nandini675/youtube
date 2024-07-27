import React from 'react'

const Vdeocard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const{localized,thumbnails,channelTitle}= snippet;
    
    
  return (
    <div className='p-2 m-2  w-72 shadow-lg'>
        <img className='rounded-lg ' 
         alt="vdeo"src={thumbnails.medium.url}/>
        <ul>
            <li className='font bold'>{ localized.title}</li>
            <li className='font bold  py-2'>{channelTitle}</li>
            <li>{statistics.viewcount}</li>
        
        </ul>
    </div>
  )
}

export default Vdeocard