
import Logo from '~/component/logo'
import logout from "../../../images/logout.png"

function Side() {
   

  return (
    <aside className='hidden px-4 pt-4 pb-8 md:block'>
        <div className='flex  flex-col'>
            <Logo />
            <nav className='py-10'>
                <div className='flex flex-col gap-1 mb-10'>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block  bg-yellow-500/10'>FlashCards</span>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block bg-yellow-500/10'>Quizzes</span>
                    <span className='py-2 px-4 rounded-md border font-semibold border-yellow-500/40 block bg-yellow-500/10'>Exam With Ai-budy</span>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block bg-yellow-500/10'>Take Examination</span>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block bg-yellow-500/10'>Study Guides</span>
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block  bg-yellow-500/5'>Quizzes</span>
                    <span className='py-2 px-4 rounded-md border border-yellow-500/40 block bg-yellow-500/5'>Quizzes</span>
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