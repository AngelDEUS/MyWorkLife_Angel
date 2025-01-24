import './styleSection_1.css'
import ImgBienvenidoSec1 from './../../../public/assets/cardAnim/04_logoCard.png'

const Section_1 = () => {
  return (
    <div className="main__Section_1">
      <div className="top_Section_1">
        <h1 className="tittle_Section_1">¡Bienvenido!</h1>
        <h2 className="subTittle_Section_1">Déjame mostrarte el futuro
          que podemos construir juntos.</h2>
      </div>
      <div className="bottom_Section_1">
        <div className="front_bienvenido__sec_1">
          <div className="nada" style={{ width: "180px" }}>
            <span className="leftText__sect_1">¡Explora lo
              inexplorado!</span>
            <div className="nada" style={{ height: "85px" }}></div>
          </div>
          <div className="rightCont__sect_1">
            <span className="rightText__sect_1">¡Hola! Soy Ángel Ayala, desarrollador frontend apasionado por crear experiencias digitales únicas.</span>
            <i className="bi bi-chevron-down" />
          </div>
        </div>
        <div className="back_bienvenido__sec_1">
          <div className="background__gradient" />
          <span className="bienvenidoBackText__sec_1">BIENVENIDO</span>
          <img src={ImgBienvenidoSec1} alt="" className="img_IackFrontPart__sec_1" draggable="none"/>
        </div>
      </div>
    </div>
  )
}

export default Section_1
