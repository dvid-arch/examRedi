

function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className=" grid grid-cols-2 w-fit gap-2">
                <div className="w-4 rotate-45 h-4  border bg-blue-500"></div>
                <div className="w-4 rotate-45 h-4  border bg-red-500"></div>
                <div className="w-4 rotate-45 h-4  border bg-yellow-500"></div>
                <div className="w-4 rotate-45 h-4  border bg-green-500"></div>
            </div>
            <span className="text-xl font-bold text-slate-500">ExamRedi</span>
        </div>
    )
}

export default Logo