import React from 'react'
import './styleMainAnimCard.css'
import ImgBGCard_TryMyWeb from './../../../../public/assets/cardAnim/04_logoCard.png'
import ImgLogoCard_TryMyWeb from './../../../../public/assets/cardAnim/05_logoCard2.png'

const AnimCard = () => {
  return (
    <div className='mainAnimCard'>
      <div className="contenAnimCard_S1">
        <div className="topCardAnim_S1">
          <div className="leftTop_S1">
            <span className="subText_LeftTop__S1">¡Prueba ahora mismo!</span>
          </div>
          <div className="rightTop_S1">
            <img src={ImgLogoCard_TryMyWeb} alt="logoTry.png" className="imgTop_Right_S1 no-drag_S1" />
          </div>
        </div>
        <div className="bottomCardAnim_S1">
          <div className="leftBottom_S1">
            <h3 className="tittle_Left__S1">¡Prueba mi creación en acción!</h3>
            <span className="subText_Left__S1">¡No te quedes con la curiosidad! Interactua con esta app, creada con pasión y atención al detalle.</span>
          </div>
          <div className="rightBottom_S1">
            <div className="nada" />
            <button type="button" className="btnTryMyApp_S1">
              <i className="bi bi-arrow-90deg-down" />
            </button>
          </div>
        </div>
      </div>
      <div className="backgroundBTN__LiveWork no-drag_S1">
        <img src={ImgBGCard_TryMyWeb} alt="log.png" className="imageTopBG__LiveWork" draggable="false" />
        <div className="circleColor_LiveWork" />
      </div>
    </div>
  )
}

export default AnimCard
