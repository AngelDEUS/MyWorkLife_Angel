import './stylesAboutMe_Sect_1.css'
import ImgPortada_1 from './../../../public/assets/aboutMeImgs/01_HeaderPresent.png'

const AboutMe_Sect_1 = () => {
  return (
    <div className='mainAboutMe_Sect_1'>
      <div className="header_AbtMSect_1">
        <div className="topHeaderGrup_Stc1">
          <h1 className="tittleAboutMe">
            <span className="ColoredRed">¿</span>
            Quierees saber más
            <span className="ColoredRed">Sobre Mí</span>?
          </h1>
          <span className="textAboutMe"></span>
        </div>
        <div className="contentHeader_Stc1">
          <div className="frontIMG_Sect1">
            <img src={ImgPortada_1} className="imgPortada_AbtMSect_1" />
          </div>
          <div className="backSect1"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe_Sect_1
