import React from 'react'
import CardForPortfolio from '../../components/Cards/CardForPortfolio'

const MainPortfolio = () => {
var xd = ['xd','sadsa'];
  return (
    <div className='mainPorfolio_Page' style={{display: 'flex', whiteSpace: 'nowrap'}}>
        <CardForPortfolio name={xd}/>
        <CardForPortfolio/>
        <CardForPortfolio/>
    </div>
  )
}

export default MainPortfolio
