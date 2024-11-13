import React from 'react'
import NavBar from './../NavBar/navBar'
import MainCurriculum from './../../pages/curriculum/mainCurriculum'
import "./stylesLayout.css";
import MainCardForPortfolio from './../../pages/portfolio/mainPortfolio';

const layout = () => {
  return (
    <div className='mainLayout'>
      <div className="navBarContainer">
        <NavBar />
      </div>
      <div className="bodyContainer">
        <div className="sideContent_layout_left"></div>
        <div className="contentPage">
          {/* <MainCurriculum /> */}
          <MainCardForPortfolio/>
        </div>
        <div className="sideContent_layout_right"></div>
      </div>
      <div className="footerMain">

      </div>
    </div>
  )
}

export default layout