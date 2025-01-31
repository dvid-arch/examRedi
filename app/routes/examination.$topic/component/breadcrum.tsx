import React from 'react'

function BreadCrum() {
    const arr = Array.from({length:50}, (_,i)=>i+1)
  return (
    <div>
        <div className='flex flex-wrap gap-2'>
            {
                arr.map((n,i)=>(
                <span key={i} className=' aspect-square border w-10 grid items-center justify-center'>
                    {n}
                </span>
                ))
            }
        </div>
    </div>
  )
}

export default BreadCrum