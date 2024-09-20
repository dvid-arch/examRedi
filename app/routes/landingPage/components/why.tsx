import anxious from '../../../images/anxious.png'

function Why() {
    return (
        <section className=' bg-blue-400'>
            <div className="container pt-10 px-8 mx-auto ">
                <div className='flex items-center gap-8'>
                    <div className='flex-1 text-xl'>
                        <h1 className=" md:max-w-[500px] lg:text-6xl  sm:text-6xl text-center md:text-left text-4xl w-fit font-bold mb-8">Don't <span className='text-red-500'>Worry</span>, We <span className='text-green-500'>have</span> your back</h1>
                        <p className='mb-4'>Our Ai teacher is better than your goto friend</p>
                        <p className='mb-4'>Multi-typed Learning</p>
                        <p className='mb-4'>Best Explanations, quizes and gamification</p>
                    </div>
                    <img src={anxious} alt="are you anxious" className=' flex-1 w-full' />
                </div>
            </div>
        </section>
    )
}

export default Why