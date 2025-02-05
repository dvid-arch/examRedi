import { Link } from "@remix-run/react"
import study from '../../images/studie.png'

function index() {
  return (
    <div className="bg-gray-100 py-8 px-8 flex items-start gap-8">
        <div className="min-h-80 bg-white shadow-lg w-80 border  rounded-md py-6 px-6 relative flex flex-col justify-between">
            <h2 className="text-3xl font-bold"> Pick up Where you left off</h2>
            
        </div>
        <div className="min-h-80 bg-white shadow-lg w-80 border  rounded-md py-6 px-6 relative flex flex-col justify-between">
            <h2 className="text-3xl font-bold">Study Now to Create a flashCard</h2>
            <img src={study} alt="" />
            <Link to={'/study'}className=" text-white font-bold block bg-blue-500 py-4 px-8 w-fit rounded-full">Study Now</Link>
        </div>
    </div>
  )
}

export default index