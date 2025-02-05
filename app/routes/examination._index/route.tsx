import Header from "~/component/header"
import Logo from "~/component/logo"

export default function Route() {
    return (<div className=" py-28">
        <div className="flex justify-between px-8 fixed top-0 left-0 right-0 z-30 bg-white">
            <Logo />
            <Header />
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-[800px] mx-auto">
            <form className="border px-8 py-10 flex flex-col justify-between gap-8 min-h-[150px]">
                <div>
                    <h2 className="text-4xl mb-4">Study For one Course</h2>
                    <p className="mb-4">Test your readiness for one Subject</p>
                    <div className="w-full">
                        <select name="course" id="course" className=" bg-blue-100 border py-1 pr-8 w-[200px]" >
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <p className="mb-2">Deselect a topic you've mastered already</p>

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

                    </div>
                </div>
                <button className="py-3 px-8 block text-center border w-full bg-blue-500 text-white font-bold text-xl">Submit</button>
            </form>
            <form className="border px-8 py-10 flex flex-col justify-between gap-8 min-h-[150px]">
                <div className="flex-1">
                    <h2 className="text-4xl mb-4">Study For one Course</h2>
                    <p className="mb-4">Test your readiness this examination</p>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <select name="course" id="course" className=" bg-blue-900/10 border py-1 pr-8 w-full" >
                            <option value="english">English</option>
                        </select>
                        <select name="course" id="course" className=" bg-blue-100 border py-1 pr-8 w-full" >
                            <option value="english">English</option>
                        </select>
                        <select name="course" id="course" className=" bg-blue-100 border py-1 pr-8 w-full" >
                            <option value="english">English</option>
                        </select>
                        <select name="course" id="course" className=" bg-blue-100 border py-1 pr-8 w-full" >
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-6 mt-8">
                        <div>
                            <p className="font-semibold mb-2 text-xl">Choose Difficulty</p>

                            <div className="grid grid-cols-2">

                                <div className="flex flex-row-reverse w-fit gap-2">

                                    <label htmlFor="difficulty">easy</label>
                                    <input type="radio" name="difficulty" id="easy" />
                                </div>

                                <div className="flex flex-row-reverse w-fit gap-2">

                                    <label htmlFor="difficulty">hard</label>
                                    <input type="radio" name="difficulty" id="hard" />
                                </div>

                                <div className="flex flex-row-reverse w-fit gap-2">

                                    <label htmlFor="difficulty">difficult</label>
                                    <input type="radio" name="difficulty" id="difficult" />
                                </div>

                                <div className="flex flex-row-reverse w-fit gap-2">

                                    <label htmlFor="difficulty">real exams</label>
                                    <input type="radio" name="difficulty" id="easy" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4 p-4 bg-blue-50 border">
                            <p>select Year</p>
                            <div className="flex-1 ">
                                <select name="year" id="year" className="px-4 py-1 border border-black block bg-blue-300">
                                    <option value="2023">2023</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <button className="py-3 px-8 block text-center border w-full bg-blue-500 text-white font-bold text-xl">Submit</button>
            </form>
        </div>
    </div>)
}

