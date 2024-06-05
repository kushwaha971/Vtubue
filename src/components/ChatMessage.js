import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-1'>  
      <img  className='w-8x h-8' 
    alt='user'
    src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>

      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>

    </div>
  )
}

export default ChatMessage