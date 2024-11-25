import './styleCardP_best.css'
//import ImagenMualani from './../../assets/pruebas/mualani_Prueba.jpg'
//import ChibiPrueba from './../../assets/pruebas/mualani_chi_Prueba.png'

const CardP_Best = ({ title, description, backgroundImage, chibiImage, likes, tags }) => {
    // SET Variables
    var descriptionShow = description;

    return (
        <div className='mainCardP_Best'>
            <div className="contentCard_Hover">
                <div className="descHover__CardP_TOP">
                    <p className="descInfo_CardP">{descriptionShow}</p>
                    {/* <div className="shadowTop_cardP" /> */}
                </div>
                <img className='imgHoverChibi' src={`./../../assets/pruebas/${chibiImage}`} alt="ChibiPrueba.png" />
            </div>
            <div className="contentCard_NoHover">
                <div className="front_Info__CardP">
                    <div className="descHover__CardP" />
                    <div className="infoBottom_CardP">
                        <h4 className="tittleCardPP">{title}</h4>
                        <div className="sepCardP" />
                        <div className="statsCardP">
                            <i className="bi bi-eye-fill"></i>
                            <span className="statsNumberCardP">{likes} Vistas</span>
                        </div>
                    </div>
                </div>
                <div className="behid__CardP">
                    <img className='imageCard_Backgroud' src={`./../../assets/pruebas/${backgroundImage}`} alt={`${title} Background.jpg`} />
                </div>
            </div>
        </div>
    )
}

export default CardP_Best
