import './styleCardP_best.css'
import ImagenMualani from './../../assets/pruebas/mualani_Prueba.jpg'
import ChibiPrueba from './../../assets/pruebas/chibi_Prueba.png'

const CardP_Best = () => {
    // SET Variables
    var imageCard_Backgroud = ImagenMualani;
    var titleCardP = 'Card title - prueba';

    return (
        <div className='mainCardP_Best'>
            <div className="contentCard_Hover">
                <div className="descHover__CardP_TOP">
                    <p className="descInfo_CardP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi similique.</p>
                    <div className="shadowTop_cardP" />
                </div>
                <img className='imgHoverChibi' src={ChibiPrueba} alt="ChibiPrueba.png" />
            </div>
            <div className="contentCard_NoHover">
                <div className="front_Info__CardP">
                    <div className="descHover__CardP" />
                    <div className="infoBottom_CardP">
                        <h4 className="tittleCardPP">{titleCardP}</h4>
                        <div className="sepCardP" />
                        <div className="statsCardP">
                            <i className="bi bi-suit-heart-fill"></i>
                            <span className="statsNumberCardP">10 likes</span>
                        </div>
                    </div>
                </div>
                <div className="behid__CardP">
                    <img className='imageCard_Backgroud' src={imageCard_Backgroud} alt="ImagenMualani.png" />
                </div>
            </div>
        </div>
    )
}

export default CardP_Best
