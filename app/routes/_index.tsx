import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ExamRedi" },
    { name: "Examination preparation app", content: "prepare for your exams" },
  ];
};

import anxious from '../images/anxious.png'
import svgimg from '../images/svgimg.svg'
import { Link } from "@remix-run/react";

function Header() {
    return (
        <header className="bg-white">
            <div className="container mx-auto py-4 px-8 text-slate-900">
                {/* logo */}
                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-2">
                        <div className=" grid grid-cols-2 w-fit gap-2">
                            <div className="w-4 rotate-45 h-4  border bg-blue-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-red-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-yellow-500"></div>
                            <div className="w-4 rotate-45 h-4  border bg-green-500"></div>
                        </div>
                        <span className="text-xl font-bold text-slate-500">ExamRedi</span>
                    </div>

                    {/* search */}
                    <div className="flex ">
                        <form className="flex">
                            <input
                                type="text"
                                className="border bg-transparent border-gray-300 rounded-l-lg px-2 py-1 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search for Exams..."
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition-colors"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </header>
    )
}
type HeroProps = {
  svgimg: string;
};

function Hero({ svgimg }: HeroProps) { 
    return (
        <div className='text-slate-900 bg-white'>
            <div className='container mx-auto py-20 px-8'>
                <div className='flex gap-8'>
                    <div className='flex-1'>
                        <img src={svgimg} alt="" className='w-full' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="md:max-w-[500px] lg:text-7xl sm:text-6xl text-center md:text-left text-4xl w-fit font-bold mb-8">
                            Get Ready for your Exams
                        </h1>
                        <p className="text-[18px] max-w-80">
                            All the resources and help you need in one place
                        </p>
                        <Link to={'/signup'}  className='py-2 px-6 block w-fit bg-yellow-400 blog my-4 font-bold'>
                            Start Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Why() {  
    return (
        <section className=' '>
            <div className="container pt-10 px-8 mx-auto ">
                <div className='flex items-center gap-8'>
                    <div className='flex-1 text-xl'>
                        <h1 className=" md:max-w-[500px] lg:text-6xl  sm:text-6xl text-center md:text-left text-4xl w-fit font-bold mb-8">Don't <span className='text-red-500'>Worry</span>, We <span className='text-green-500'>have</span> your back</h1>
                        <p className='mb-4 flex gap-2'><span className='block h-8 w-8 bg-slate-400 border'></span>Our Ai teacher is better than your goto friend</p>
                        <p className='mb-4'>Multi-typed Learning</p>
                        <p className='mb-4'>Best Explanations, quizes and gamification</p>
                    </div>
                    <img src={anxious} alt="are you anxious" className=' flex-1 w-full' />
                </div>
            </div>
        </section>
    )
}


function Testimonial() {

    return (<section className=" bg-yellow-500 text-slate-900">

        <div className="py-20 px-8 ">
            <h2 className="text-5xl mx-auto text-center">Our Customers Can Testify</h2>
            <div className="py-10 pt-20 grid lg:grid-cols-3 gap-8">

                <p className="  max-w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae reprehenderit laboriosam, provident nam veniam!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</p>
                <p className="  max-w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae reprehenderit laboriosam, provident nam veniam!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</p>
                <p className="  max-w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae reprehenderit laboriosam, provident nam veniam!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</p>
            </div>
        </div>
    </section>)
}


function Footer() {
    return (
        <footer className="bg-slate-800">
            <div className="py-10 px-8 container">

            </div>
        </footer>
    )
}

function Index() {
    return (
        <div className="">
            <Header />
            <Hero svgimg={svgimg}  />
            <Why />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Index


