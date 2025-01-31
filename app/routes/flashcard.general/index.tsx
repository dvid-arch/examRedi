import React from 'react'
import Nav from '../flashcard.general/component/nav'
import Cards from '../flashcard.general/component/cards'
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