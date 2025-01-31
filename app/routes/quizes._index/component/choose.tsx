function Choose() {
    return (
        <div>
            <div className="min-h-[400px] border px-8 py-10">
                <h2 className="text-4xl mb-4">choose Course</h2>
                <p className="mb-4">Test your readiness for one Subject</p>
                <div className="w-full">
                    <form action="#">

                        <select name="course" id="course" className=" bg-yellow-100 border py-1 pr-8 w-[200px]" >
                            <option value="english">English</option>
                        </select>
                    </form>
                </div>
                <div className="mt-4">
                    <p className="mb-2 max-w-[400px]">Deselect a topic you've mastered already, or choose (m)anny to master</p>
                    <form action="#" className="block ">
                        <div className="max-h-[150px] border overflow-auto mb-4 p-2">

                            <div className="flex gap-2 p-2 border w-fit mb-2">
                                <input type="checkbox" checked name="oral" id="oral" />
                                <label htmlFor="oral">All</label>
                            </div>
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
        </div>
    )
}

export default Choose