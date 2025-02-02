import './stylesAboutMe_Sect_1.css'
import ImgPortada_1 from './../../../public/assets/aboutMeImgs/01_HeaderPresent.png'

const AboutMe_Sect_1 = () => {
  return (
    <div className='mainAboutMe_Sect_1'>
      <div className="header_AbtMSect_1">
        <div className="topHeaderGrup_Stc1">
          <h1 className="tittleAboutMe">
            <span className="ColoredRed">¿</span>
            Quieres saber más
            <span className="ColoredRed">Sobre Mí</span>?
          </h1>
          <span className="textAboutMe">Transformo ideas en realidades digitales, combinando creatividad y tecnología</span>
        </div>
        <div className="contentHeader_Stc1">
          <div className="frontIMG_Sect1">
            <div className="textThingsIMG">
              <h3 className="titleAboutMe">
                Acerca de
                <span className="ColoredRed">Mí</span>.
              </h3>
              <p className="textP">
                ¡Hola! Soy Miguel Angel Ayala, un apasionado desarrollador de software con 24 años.
              </p>
              <button className="AprendeAboutme">
                Aprende sobre Mí
              </button>
            </div>
            <div className="buttonsFloat">
              <button className="btnFloat">
                <i className="bi bi-linkedin" />
              </button>
              <button className="btnFloat">
                <i className="bi bi-twitter-x" />
              </button>
              <button className="btnFloat">
                <i className="bi bi-behance" />
              </button>
            </div>
            <img src={ImgPortada_1} className="imgPortada_AbtMSect_1" draggable="false" />
          </div>
          <div className="backSect1">
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe_Sect_1
