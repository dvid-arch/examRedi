import React from 'react'

function AiBot({}) {
  return (
    <div >
        <div className='flex gap-2 bg-white mb-4 p-2 rounded-md'>
            <span className='block h-10 w-10 border '></span>
            <p className='flex-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, reprehenderit?</p>
        </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm border text-white font-bold p-1 px-3 rounded-md bg-black/20'>"key principles of quantum mechanics?"</p>
                <p className='text-sm  border text-white font-bold p-1 px-3 rounded-md bg-black/20'>How does the theory of relativity affect our understanding of time and space?"</p>
                <p className='text-sm border text-white font-bold p-1 px-3 rounded-md bg-black/20'>"Can you explain how black holes are formed?"</p>
            </div>
    </div>
  )
}

export default AiBot