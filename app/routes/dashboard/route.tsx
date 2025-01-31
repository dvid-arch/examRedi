import { Outlet } from "@remix-run/react";
import Side from "~/component/side";
import Header from "~/component/header";


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
                <button className="block border py-1 px-2 text-sm bg-blue-500 text-white font-semibold">View All</button>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Check your Exam Readiness</h2>
                <form action="#">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <select name="english" id="english" disabled className="bg-slate-300 p-2">
                            <option value="english" disabled>English</option>
                        </select>
                        <select name="english" id="english" className="bg-slate-50 p-2">
                            <option value="english" >English</option>
                        </select>
                        <select name="english" id="english" className="bg-slate-50 p-2">
                            <option value="english" >English</option>
                        </select>
                        <select name="english" id="english" className="bg-slate-50 p-2">
                            <option value="english" >English</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 text-white w-full block font-bold px-8 py-3">Submit</button>
                </form>
            </div>
        </div>
    )
}



const BentoGrid = () => {
    return (
        <div className="container mx-auto md:p-4">
            <div className="flex flex-col gap-4 max-w-[500px]">
                <div className="bg-blue-200 p-4 md:p-6 rounded-lg shadow-md col-span-3">
                    <h2 className="text-xl font-bold mb-2">Estimated Score</h2>
                    <p className="text-6xl text-black/80 font-semibold">50/100</p>
                    <p>This box spans two rows on larger screens and two columns on medium screens.</p>
                </div>
                <div className="flex gap-4">

                    <div className="bg-green-200 p-4 md:p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Box 2</h2>
                        <p>This is a standard box that adapts to the grid layout.</p>
                    </div>
                    <div className="bg-yellow-200 p-4 md:p-6 rounded-lg shadow-md col-span-2">
                        <h2 className="text-xl font-bold mb-2">Box 3</h2>
                        <p>Another standard box that fits into the responsive grid.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default function Route() {
    return (
        <div className=" ">

            <div className="hidden lg:block h-screen overflow-y-auto w-[250px] absolute border">
                <Side />
            </div>
            <div className="lg:ml-[250px] relative h-screen overflow-auto flex flex-col">
                <Header />
                <div className="flex-1 overflow-auto">
                    <div className="text-black px-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">

                                <BentoGrid />
                            </div>
                            <div className="flex-1 py-8">
                                <Action />
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}