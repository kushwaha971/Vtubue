import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='py-2 px-5 m-2 rounded-lg bg-gray-300'>{props.name}</button>
    </div>
  )
}

export default Button