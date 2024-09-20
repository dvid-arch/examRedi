import React from "react"

function Nav() {
  return (
    <div className="px-8 bg-slate-50 py-4">
        <div className="flex justify-between items-end">
            <div className="flex flex-col max-w-40">
                <label htmlFor="course" className="font-bold capitalize text-sm">choose course</label>
                <select name="course" id="course" className="bg-black/20 px-4 py-2">
                    <option value="physics">Random</option>
                    <option value="physics">physics</option>
                </select>
            </div>
            <div className="flex gap-4">
                <span className="py-1 px-3 border bg-green-500/10">concepts</span>
                <span className="py-1 px-3 border bg-green-500/10">concepts</span>
                <span className="py-1 px-3 border bg-green-500/10">concepts</span>
                <span className="py-1 px-3 border bg-green-500/10">concepts</span>
                <span className="py-1 px-3 border bg-green-500/10">concepts</span>
            </div>
        </div>
    </div>
  )
}

export default Nav