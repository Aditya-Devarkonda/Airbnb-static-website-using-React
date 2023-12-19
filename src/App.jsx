import React from 'react'
import {Navbar} from "./components/navbar"
import{Hero} from "./components/Hero"
import{loopCards} from "./components/Card.jsx"


export function App(){
  return(
    <div className="layout">
      <Navbar />
      <Hero />
      <div className='list-card'>
      {loopCards}
      </div>
    </div>
  )
}