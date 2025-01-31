import React from 'react';
import { Outlet } from '@remix-run/react'
import Header from '~/component/header';
import Side from '~/component/side';


function Index() {
  return (
    <div className=''>
      <div className='fixed max-h-screen overflow-auto left-0 top-0 min-w-[300px] z-10 '>
        
        <Side />
        <div className="h-80"></div>
      </div>
      <div className='ml-[300px]'>
        <Header />
        <div className='h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index