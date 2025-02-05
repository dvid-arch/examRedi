import React from 'react';
import { Outlet } from '@remix-run/react'
import Header from '~/component/header';
import Side from '~/component/side';


function Index() {
  return (
    <div className='flex items-start'>
      <div className='min-h-screen fixed min-w-[300px] overflow-auto'>
        <Side />
        
      </div>
      <div className='flex-1 bg-black ml-[300px]'>
        <Header />
        <div className='overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index