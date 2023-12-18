import React from 'react'
import {Navbar} from "./components/navbar"
import{Hero} from "./components/Hero"
import{Card} from "./components/Card"
import Data from "./components/data"

export function App(){
  
  const loopCards= Data.map(function(item){
    return(
      <Card 
        title={item.title}
        price={item.price}
        img={item.coverImg}
        starRating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        spot={item.openSpots}
      />
    )
  })

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