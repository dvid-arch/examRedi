import React from 'react';
import { Outlet } from '@remix-run/react'


function Index() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Index