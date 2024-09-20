import BreadCrum from "./component/breadcrum"
import HeaderMany from "./component/header"
import Qanda from "./component/qanda"

function Route() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow overflow-auto">
                <HeaderMany />
                <Qanda />
            </div>
            <div className="bg-white  p-4 border-t-2 border-blue-500">
                <BreadCrum />
            </div>
        </div>
    )
}

export default Route