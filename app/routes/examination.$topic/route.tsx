import BreadCrum from "./component/breadcrum"
import Header from "./component/header"
import Qanda from "./component/qanda"

function Route() {
    return (
        <div className="flex flex-col h-screen pt-8">
            <div className="flex-1 overflow-auto">

                <Header />
                <Qanda />
            </div>
            <div className="bg-white p-4 border-t-2 border-blue-500">
                <BreadCrum />
            </div>
        </div>
    )
}

export default Route