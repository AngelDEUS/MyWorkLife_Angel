import React from 'react'
import Anim_BG_01 from '../../../../public/assets/cardAnim/01_BG_Anim.png'
import Anim_Icons_02 from '../../../../public/assets/cardAnim/02_Icons_Anim.png'
import Star_Anim_03 from '../../../../public/assets/cardAnim/03_Star_Anim.png'
import './styleMainAnimCard.css'

const AnimCard = () => {
  return (
    <div className='mainAnimCard'>
        <img src={Anim_BG_01} alt="" className="imgAnim anim_BG_01" />
        <img src={Anim_Icons_02} alt="" className="imgAnim anim_Icons_02" />
        <img src={Star_Anim_03} alt="" className="imgAnim anim_Star_03" />
    </div>
  )
}

export default AnimCard
