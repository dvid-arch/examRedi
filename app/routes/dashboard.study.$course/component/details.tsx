import React from 'react'

function Details() {
    const prereq = [
        "maths", "english", "algebra", "vector addition", "javascript",
        "vector addition", "javascript"
    ]
    return (
        <div className="flex-1 h-full  pt-8 overflow-auto sm:px-4 bg-slate-100">
            <div className="md:px-8 max-w-[80ch] mx-auto flex flex-col gap-6">
                <div>
                    <div className="mb-2 flex gap-6 items-center">

                        <h2 className="text-2xl ">Pre-requisites</h2>
                        <span>
                            <a href="#" className="text-primary">review</a>
                        </span>
                    </div>
                    <div className="flex items-baseline flex-wrap gap-y-2">
                        {
                            prereq.map((n, i) => (
                                <span
                                    className="px-3 py-1 bg-white border rounded-full mx-[2px] font-extralight text-nowrap"
                                    key={i}>
                                    {n}
                                </span>))
                        }

                    </div>
                </div>
                <div>
                    <h2 className="text-2xl tracking-wide mb-2">Definitions</h2>
                    <div className="py-4 px-6 bg-white mb-4 border">
                        <h3 className="font-semibold mb-1 ">Angle of Attack: <span className="inline-block ml-2 px-2 rounded-full border hover:bg-accent">v</span></h3>
                        <div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem rerum sequi nostrum cumque necessitatibus nesciunt in ut modi nobis.</p>
                        </div>
                    </div>
                    <div className="py-4 px-6 bg-white mb-4 border">
                        <h3 className="font-semibold mb-1">Angle of Attack:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem rerum sequi nostrum cumque necessitatibus nesciunt in ut modi nobis.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl tracking-wide mb-2">Concepts</h2>
                    <div className="py-4 px-6 bg-white mb-4 border">
                        <h3 className="font-semibold mb-1 ">Angle of Attack:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem rerum sequi nostrum cumque necessitatibus nesciunt in ut modi nobis.</p>
                        <div className="px-4 py-6  mt-4 bg-slate-100">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, deserunt.</p>
                        </div>
                    </div>
                    <div className="py-4 px-6 bg-white mb-4">
                        <h3 className="font-semibold mb-1">Angle of Attack:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem rerum sequi nostrum cumque necessitatibus nesciunt in ut modi nobis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details