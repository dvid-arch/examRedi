import { Link } from "@remix-run/react"

function index() {
  return (
    <div className="bg-blue-200 py-8 px-8 flex gap-8">
        <div className="h-80 w-80 border bg-blue-500 border-pink-500 py-6 px-6 relative">
            <h2 className="text-3xl font-bold"> Pick up Where you left off</h2>
            
        </div>
        <div className="h-80 w-80 border bg-blue-500 border-pink-500 rounded-md py-6 px-6 relative flex flex-col justify-between">
            <h2 className="text-3xl font-bold">Study Now to Create a flashCard</h2>
            <Link to={'/study'}className="bg-white text-blue-500 block py-4 px-8 w-fit rounded-full">Study Now</Link>
        </div>
    </div>
  )
}

export default index