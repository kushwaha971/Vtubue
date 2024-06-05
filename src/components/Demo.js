import React, { useState } from 'react'
import { findPrime } from '../utils/contants';

const Demo = () => {
  const [text, setText] = useState();
const prime = findPrime(123);
  return (
    <div className='m-4 p-4 w-96 h-96 border border-black'>

        <div>
            <button className='m-10 p-2 bg-green-200'>Toggle</button>
        </div>
        <div>
            <input className='border border-black'
             type='number ' value={text} 
             onChange={(e) => setText(e.target.value)}
             
             />
        </div>
        <div>
            <h1>nth Prime : {prime} </h1>
        </div>
    </div>
  )
}

export default Demo