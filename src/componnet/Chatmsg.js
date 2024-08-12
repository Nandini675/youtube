import React from 'react'

const Chatmsg = ({name,msg}) => {
  return (
    <div className=' flex items-center shadow-sm p-2'>
        <img className=' h-8 px-4'
     alt="usericon"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaJS0dnDYQ5NkVr30LWhCjQoMLtm6BC0TDA&s"
    />
    <span className='font-bold px-2'>{name}</span>
    <span>{msg}</span>

    </div>
  )
}

export default Chatmsg