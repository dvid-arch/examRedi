import Logo from '~/component/logo'
import logout from "../images/logout.png"
import { Link } from '@remix-run/react'

function Side() {


    return (
        <aside className='hidden px-4 pt-4 pb-8 md:block'>
            <div className='flex  flex-col'>
                <div className='sticky top-0 left-0 right-0 bg-white py-2'>
                    <Logo />
                </div>
                <nav className='py-10'>
                    <div className='flex flex-col gap-1 mb-8'>
                        <Link to={'/flashcard'} className='py-2 px-4 rounded-md  block hover:bg-blue-500/30 '>FlashCards</Link>
                        <Link to={'/quizes'} className='py-2 px-4 rounded-md  block hover:bg-blue-500/30 '>Quizzes</Link>
                        <Link to={'/withAi'} className='py-2 px-4 rounded-md border font-semibold block hover:bg-blue-500/30 '>Exam With Ai-budy</Link>
                        <Link to={'/examination'} className='py-2 px-4 rounded-md  block hover:bg-blue-500/30 '>Take Examination</Link>
                        <Link to={'/study'} className='py-2 px-4 rounded-md  block hover:bg-blue-500/30 '>Study Guides</Link>
                    </div>
                    <div className='flex flex-col gap-1 mb-4 border p-2 shadow-md rounded-md'>
                        <span className='py-2 px-4 rounded-md block hover:bg-blue-500/30'>Quizzes</span>
                        <span className='py-2 px-4 rounded-md border '>Quizzes</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='py-[1px] px-4 rounded-md border border-green-500 block w-fit text-white font-bold  bg-green-500'>upgrade</span>
                    </div>
                </nav>
                <div>
                    <span className='flex gap-2 text-red-500'><img src={logout} alt="logout" className='w-5 h-auto' />logout</span>
                </div>
            </div>
        </aside>
    )
}

export default Side