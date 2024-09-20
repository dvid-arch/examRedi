import React from 'react'
import Nav from './component/nav'
import Cards from './component/cards'
import { Outlet } from '@remix-run/react'

function Index() {
  return (
    <div>
      <Nav />
      <Cards />
    </div>
  )
}

export default Index