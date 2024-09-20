function Header() {
    return (
        <header className="bg-white">
            <div className="container mx-auto py-4 px-8 text-slate-900">
                {/* logo */}
                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-2">
                        <div className=" grid grid-cols-2 w-fit gap-2">
                            <div className="w-4 rotate-45 h-4  border bg-blue-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-red-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-yellow-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-green-500"></div>
                        </div>
                        <span className="text-xl font-bold text-slate-500">ExamRedi</span>
                    </div>

                    {/* search */}
                    <div className="flex ">
                        <form className="flex">
                            <input
                                type="text"
                                className="border bg-transparent border-gray-300 rounded-l-lg px-2 py-1 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search for Exams..."
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition-colors"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header