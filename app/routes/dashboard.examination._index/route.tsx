import React from 'react';

export default function Route() {
    return (<div className="py-10 px-8">
            <div className="grid grid-cols-2 gap-4 max-w-[800px] mx-auto">
                <div className="min-h-[400px] border px-8 py-10">
                    <h2 className="text-4xl mb-4">Study For one Course</h2>
                    <p className="mb-4">Test your readiness for one Subject</p>
                    <div className="w-full">
                        <select name="course" id="course" className=" bg-yellow-100 border py-1 pr-8 w-[200px]" >
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <p className="mb-2">Deselect a topic you've mastered already</p>
                        <form action="#" className="block ">
                            <div className="max-h-[150px] border overflow-auto mb-4 p-2">

                                <div className="flex gap-2 p-2 border">
                                    <input type="checkbox" checked name="oral" id="oral" />
                                    <label htmlFor="oral">Oral English</label>
                                </div>
                                <div className="flex gap-2 p-2 border">
                                    <input type="checkbox" checked name="oral" id="oral" />
                                    <label htmlFor="oral">Oral English</label>
                                </div>
                                <div className="flex gap-2 p-2 border">
                                    <input type="checkbox" checked name="oral" id="oral" />
                                    <label htmlFor="oral">Oral English</label>
                                </div>
                            </div>
                            <button className="py-3 px-8 block text-center border w-full bg-yellow-500 text-white font-bold text-xl">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="border px-8 py-10 flex flex-col min-h-[150px]">
                    <div className="flex-1">
                        <h2 className="text-4xl mb-4">Study For one Course</h2>
                        <p className="mb-4">Test your readiness this examination</p>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <select name="course" id="course" className=" bg-yellow-900/10 border py-1 pr-8 w-full" >
                                <option value="english">English</option>
                            </select>
                            <select name="course" id="course" className=" bg-yellow-100 border py-1 pr-8 w-full" >
                                <option value="english">English</option>
                            </select>
                            <select name="course" id="course" className=" bg-yellow-100 border py-1 pr-8 w-full" >
                                <option value="english">English</option>
                            </select>
                            <select name="course" id="course" className=" bg-yellow-100 border py-1 pr-8 w-full" >
                                <option value="english">English</option>
                            </select>
                        </div>
                    </div>
                    <button className="py-3 px-8 block text-center border w-full bg-yellow-500 text-white font-bold text-xl">Submit</button>
                </div>
            </div>
        </div>)
}

