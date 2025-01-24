import './styleSection_4.css'
import ImgLogo_Sect4 from './../../../public/assets/cardAnim/04_logoCard.png'

const Section_4 = () => {
    return (
        <div className='main__Section_4'>
            <div className="cardContent__Sect_4">
                <div className="cardContentFull__Sect_4">
                    <div className="topTextImg__Sect_4">
                        <h2 className="tittle__Sect_4">¿Listo para
                            conectarnos?</h2>
                        <img src={ImgLogo_Sect4} alt="" className="logoRight__Sect_4" draggable="false" />
                    </div>
                    <p className="textInfo__Sect_4">Si te interesa colaborar o simplemente
                        quieres saber más sobre mí y mi trabajo, no dudes en
                        contactarme.</p>
                    <button className="goToContactMe__Sect_4">Ir a página de contacto</button>
                </div>
                <img src={ImgLogo_Sect4} alt="" className="backgroundIMGIm__Sect_4" />
            </div>
        </div>
    )
}

export default Section_4
