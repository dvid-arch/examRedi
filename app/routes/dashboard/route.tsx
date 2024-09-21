import { Outlet } from "@remix-run/react";
import Side from "./components/side";
import Header from "~/component/header";

export default function Route() {
    return (
        <div className="">

            <div className="hidden lg:block h-screen overflow-y-auto w-[250px] absolute border">
                <Side />
            </div>
            <div className="lg:ml-[250px] relative h-screen overflow-auto flex flex-col">
                <Header />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}