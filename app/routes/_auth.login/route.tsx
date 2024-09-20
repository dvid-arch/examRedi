import { Link } from '@remix-run/react'
import React from 'react'

export default function Login() {
  
    return (
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row px-4">
            <div className="flex-1 md:min-h-screen flex flex-col-reverse md:flex-col justify-center items-center md:gap-6 gap-4">
                <h1 className=" text-4xl max-w-[480px] sm:text-4xl md:text-6xl text-center">Begin your journey to making the best grades</h1>
                <div className="flex justify-center ">
                    <Logo />
                </div>
            </div>
            <div className="md:h-screen md:flex-1 overflow-auto flex justify-center items-center py-6">
                <form  className="block w-full max-w-[360px] rounded-xl py-6 px-6 border shadow-lift">
                    <h2 className="text-3xl text-center mb-8 font-bold">Sign in</h2>
                    <div className="flex gap-1 justify-center items-center mb-6">
                        <span className="w-10 h-10 block rounded-md border"></span>
                        <span className="w-10 h-10 block rounded-md border"></span>
                        <span className="w-10 h-10 block rounded-md border"></span>
                        <span className="w-10 h-10 block rounded-md border"></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        

                    </div>
                    <Link className="block w-full py-[10px] px-[15px] border-primary border mt-6 bg-primary text-center text-white mb-2 rounded-lg"
                       to={'/dashboard'} >Log in</Link>
                    <p className="text-centers">do not have an account? <a href="#" className="text-primary" >Sign up</a></p>
                </form>
            </div>
        </div>
    )
}

function Logo() {
    return (
      <div className="flex items-center gap-2">
        <div className=" grid grid-cols-2 w-fit gap-2">
          <div className="w-4 rotate-45 h-4  border bg-blue-500"></div>
          <div className="w-4 rotate-45 h-4  border bg-red-500"></div>
          <div className="w-4 rotate-45 h-4  border bg-yellow-500"></div>
          <div className="w-4 rotate-45 h-4  border bg-green-500"></div>
        </div>
        <span className="text-xl font-bold text-slate-500">ExamRedi</span>
      </div>
    )
  }