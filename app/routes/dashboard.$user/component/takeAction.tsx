

export function Action() {
  return (
    <div className="flex flex-col gap-8">
      <div>

        <h2 className="text-xl font-bold mb-4">Choose A Course to Study</h2>


        <h3 className="flex items-center gap-2 mb-2"><span className="h-4 w-4 block border rounded-full bg-green-500"></span> Popular</h3>

        <div className="flex flex-wrap gap-4 mb-4">

          <span className="flex items-end gap-2 text-sm p-1 border">
            <span className="h-6 w-6 border block"></span>
            mathematics
          </span>
          <span className="flex items-end gap-2 text-sm p-1 border">
            <span className="h-6 w-6 border block"></span>
            mathematics
          </span>
          <span className="flex items-end gap-2 text-sm p-1 border">
            <span className="h-6 w-6 border block"></span>
            mathematics
          </span>
          <span className="flex items-end gap-2 text-sm p-1 border">
            <span className="h-6 w-6 border block"></span>
            mathematics
          </span>
        </div>
        <button className="block border py-1 px-2 text-sm bg-yellow-500 text-white font-semibold">View All</button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Check your Exam Readiness</h2>
        <form action="#">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <select name="english"  id="english" disabled className="bg-slate-300 p-2">
              <option value="english" disabled>English</option>
            </select>
            <select name="english"  id="english"  className="bg-slate-50 p-2">
              <option value="english" >English</option>
            </select>
            <select name="english"  id="english"  className="bg-slate-50 p-2">
              <option value="english" >English</option>
            </select>
            <select name="english"  id="english"  className="bg-slate-50 p-2">
              <option value="english" >English</option>
            </select>
          </div>
          <button className="bg-yellow-500 text-white w-full block font-bold px-8 py-3">Submit</button>
        </form>
      </div>
    </div>
  )
}

