import React, { useMemo, useState } from 'react';
import { findNthPrime } from '../utilities/primeGen';
const Memo = () => {
    const [text , setText] = useState(null);
    const [dark , setDark] = useState(false)

    const prime = useMemo(()=>findNthPrime(text) , [text]);

    // const prime = findNthPrime(text);

  return (
    <div className={'border border-gray-400 rounded-lg shadow-lg p-2 m-2 '+(dark && 'bg-gray-900 text-white')}>
        <div >
            <input className={'p-2 m-2 border border-gray-200 '+ (dark && 'bg-gray-500 text-white')} type='number' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className='p-2 m-2 bg-green-400 cursor-pointer hover:bg-green-500' onClick={()=>setDark(!dark)}>Toggle</button>
            {text>=1 ? (<p className='p2 m-2 text-center'>{text} th prime : {prime}</p>):(null)}
        </div>
    </div>
  )
}

export default Memo;