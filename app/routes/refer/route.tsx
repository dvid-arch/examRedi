import refer from '../../images/refer.png'
import React from 'react'

function Route() {
    return (
        <div className="px-8 py-10">
            <div className="flex gap-8 flex-1">
                <div className="img">
                    <img src={refer} alt="" className='w-[90%]' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-5xl flex-1 font-bold text-blue-500 mb-8'>Refer a Friend and Get 10% when they Deposit</h1>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-semibold text-black mb-4'>Refferal Link</h2>
                        <span className=' pl-4 border flex justify-between gap-8'>ljdaljkljljkjte.com <button className='p-1 bg-yellow-500 px-2'>copy</button></span>
                        
                    </div>
                    <div>
                    <h2 className='text-2xl font-semibold text-black mb-4'>share on social media</h2>
                    <span className='  flex  gap-8'>
                        <span className='h-12 w-12 block border'></span>
                        <span className='h-12 w-12 block border'></span>
                        <span className='h-12 w-12 block border'></span>
                        <span className='h-12 w-12 block border'></span>
                    </span>
                        
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Route