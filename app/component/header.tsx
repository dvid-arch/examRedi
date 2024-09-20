
export default function Header() {
    return (
        <header className="py-4 px-8 z-20 container flex justify-end sticky top-0 left-0 right-0 bg-white ">
            <div className="flex gap-8 justify-end max-w-[600px] w-full">

                <div className="flex-1">
                    <input type="search" className="border bg-slate-100 text=[18px] rounded-md p-2 w-full" placeholder="search for courses" />
                </div>
                <div>
                    <span className="h-12 w-12 block border rounded-full"><img src="#" alt="profile" /></span>
                </div>
            </div>
        </header>
    )
}

