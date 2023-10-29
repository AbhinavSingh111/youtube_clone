import React, { useRef, useState } from 'react'

const Ref = () => {
    let x = 0;
    const [y , setY] = useState(0);
    const ref = useRef(0);
  return (
    <div  className='w-96 border border-gray-400 rounded-lg shadow-lg p-2 m-2 '>
        <div>
            <span>
                <p className='p2 m-2 '>Normal Var = {x}</p>
                <button onClick={()=>{x=x+1;console.log(x)}} className='p-2 m-2 bg-green-400 cursor-pointer hover:bg-green-500 '>Increase</button>
            </span>
        </div>
        <div>
            <span>
                <p className='p2 m-2 '>State Var = {y}</p>
                <button onClick={()=>{setY(y+1); console.log(y)}} className='p-2 m-2 bg-green-400 cursor-pointer hover:bg-green-500'>Increase</button>
            </span>
        </div>
        <div>
            <span>
                <p className='p2 m-2'>Ref Var = {ref.current}</p>
                <button onClick={()=>{ref.current = ref.current+1 ; console.log(ref)}} className='p-2 m-2 bg-green-400 cursor-pointer hover:bg-green-500'>Increase</button>
            </span>
        </div>
    </div>
  )
}

export default Ref;