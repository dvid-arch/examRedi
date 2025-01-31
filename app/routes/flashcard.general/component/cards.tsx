import { useState } from "react"


export default function Cards() {
  
    return (
        <div className="px-8 pt-10">
            <div className="max-w-[800px] overflow-visible  relative mx-auto">
              
                <div className={`flex flex-col  mx-auto h-[400px] bg-white absolute max-w-[800px]  w-full  border-[2px]  z-0 p-4 py-10`}>
                    <p className="mb-4 text-xl max-w-[500px]">what is the Capital of Europe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolor. </p>
                    <div className="bg-gray-50 h-[200px] w-full">

                    </div>
                    <button  className="block absolute py-2 px-8 border bottom-4 right-8">Hello</button>
                </div>
            </div>
        </div>
    )
}

