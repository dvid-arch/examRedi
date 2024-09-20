import { useState } from "react"


export default function Cards() {
    const color = ['border-blue-200','border-yellow-200','border-green-200', 'border-red-200']
    const color1 = ['border-yellow-200','border-green-200','border-red-200', 'border-blue-200']
    const [colorIndex, setColorIndex] = useState(0)

    function flipColor(){
        if(colorIndex < 3){
            setColorIndex(colorIndex + 1);
        } else{
            setColorIndex(0)
        }
    }
    return (
        <div className="px-8 pt-10">
            <div className="max-w-[800px] overflow-visible  relative mx-auto">
                <div className={`absolute top-0   left-0 w-full rotate-[4deg] mx-auto h-[400px]  max-w-[800px] ${color1[colorIndex]} border-[2px]`}   >

                </div>
                <div className={`flex flex-col  mx-auto h-[400px] bg-white absolute max-w-[800px]  w-full ${color[colorIndex]} border-[2px]  z-0 p-4 py-10`}>
                    <p className="mb-4 text-xl max-w-[500px]">what is the Capital of Europe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolor. </p>
                    <div className="bg-gray-50 h-[200px] w-full">

                    </div>
                    <button onClick={flipColor} className="block absolute py-2 px-8 border bottom-4 right-8">Hello</button>
                </div>
            </div>
        </div>
    )
}

