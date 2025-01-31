import React from 'react'

function Aside() {
    return (
        <div className=" mt-8 shadow-lift md:max-w-[360px]">
            <div className='text-5xl px-4 py-6 bg-blue-50 text-wrap'></div>
            <div className=" max-w-full  px-6  py-6 bg-white">
                <div className="w-40 h-40">
                    <img className='w-full' src='#' alt="picture" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl sm:text-3xl  font-bold tracking-wide">Projectile Motion</h2>
                    <p className="text-sm">know all about projectiles by learning using the past question approach, you will be able to learn and see how they are being used in questions as well</p>
                </div>
            </div>
        </div>
    )
}

export default Aside