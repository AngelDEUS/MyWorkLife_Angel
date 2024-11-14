import React from 'react'
import NavBar from './../NavBar/navBar'
import MainCurriculum from './../../pages/curriculum/mainCurriculum'
import "./stylesLayout.css";
import MainCardForPortfolio from './../../pages/portfolio/mainPortfolio';
import MainSideMenu from '../SideMenu/mainSideMenu';

const layout = () => {
  return (
    <div className='mainLayout'>
      {/* <div className="navBarContainer">
        <NavBar />
      </div> */}
      <div className="sideMenuContainer">
        <MainSideMenu />
      </div>
      <div className="bodyContainer">
        {/* <div className="sideContent_layout_left"></div> */}
        <div className="contentPage">
          {/* <MainCurriculum /> */}
          {/* <MainCardForPortfolio/> */}
        </div>
        <div className="publicity_Slide">
          <span className="textSlid__Publicity" data-text="50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - 50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - 50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - ">
            50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - 50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - 50％ 割 引 - 50% de descuento - 50% 할인 - 50% off - 我 们 的 部 分 有 50% 折 扣 - 
          </span>
        </div>

        {/* <div className="sideContent_layout_right"></div> */}
      </div>
      {/* <div className="footerMain">
      </div> */}
    </div>
  )
}

export default layout