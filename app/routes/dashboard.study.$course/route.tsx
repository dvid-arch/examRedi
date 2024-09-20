import React from 'react'
import Aside from './component/aside'
import Details from './component/details'

function Route() {
    

    return (
        <div className="flex flex-col items-center md:flex-row md:items-start bg-accent px-4">
            {/* guide description */}
            <Aside />
            <Details />
           
        </div>
    )
}
export default Route