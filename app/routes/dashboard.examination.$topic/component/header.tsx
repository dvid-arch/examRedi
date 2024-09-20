import React from 'react'

function Header() {
    return (
        <div className='flex justify-between sticky top-0 bg-white items-baseline px-8'>
            <span className='py-2 px-8 border'>Mathematics</span>
            <div className='flex items-end gap-8'>

                <span className='font-bold text-3xl  flex gap-2'><span>01</span>:<span>00</span>:<span>00</span></span>
                <button className='py-1 px-6 text-xl border rounded-md'>submit</button>
            </div>
        </div>
    )
}

export default Header