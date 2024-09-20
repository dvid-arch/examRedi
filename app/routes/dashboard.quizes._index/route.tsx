import React from 'react'
import AiBot from './component/aiBot'
import Choose from './component/choose'

function Route() {
    return (
        <div className='h-full'>
            <div className='flex h-full'>
                <div className='flex-1 py-10 px-8'>
                    <Choose />
                </div>
                <div className='max-w-[400px] bg-blue-900/10 py-10 px-8 h-full'>
                    <AiBot />
                </div>
            </div>
        </div>
    )
}

export default Route