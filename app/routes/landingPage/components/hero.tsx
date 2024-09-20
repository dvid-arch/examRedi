import svgimg from '../../../images/svgimg.svg'

export default function Hero() {
    return (
        <div className=' text-slate-900 bg-white '>
            <div className='container mx-auto py-20 px-8'>

            <div className='flex gap-8'>

                <div className='flex-1'><img src={svgimg} alt="" className='w-full' /></div>
                <div className='flex-1'>
                    <h1 className=" md:max-w-[500px] lg:text-7xl sm:text-6xl text-center md:text-left text-4xl w-fit font-bold mb-8">Get Ready for your Exams</h1>

                    <p className="text-[18px] max-w-80 ">all the resources and help you need in one place</p>
                    <button className='py-2 px-6 bg-yellow-400 blog my-4 font-bold'>Start Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}

