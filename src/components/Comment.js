import React from 'react'

const Comment = ({data}) => {
  // console.log("datas",data);

    const {name,text,replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-200 rounded-lg my-2'>
        <img  className='w-12 h-12' 
        alt='user'
        src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>

        </div>
    </div>
  )
}

export default Comment