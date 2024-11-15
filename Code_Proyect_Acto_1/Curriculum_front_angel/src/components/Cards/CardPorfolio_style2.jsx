import './styleCard_2.css'
import ImagePrueba from './../../assets/potography/PP_2_recorted.jpg'

const CardPorfolio_style2 = () => {
    return (
        <div className='mainCard__style2'>
            <div className="upperCard">
                <div className="____"></div>
                <div className="contendUpperCard">
                    <div className="contentUpperCard">
                        <div className="leftInfo_Card">
                            <h4 className="cardTittle_s">Card Title</h4>
                            <div className="infoStadistics_Card">
                                <i className="bi bi-suit-heart-fill"></i>
                                <span className="ContadorCard">12</span>
                            </div>
                        </div>
                        <button type="button" className='btnCard_Open'>
                            <i className="bi bi-arrow-up-right-circle"></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className="behidImageCard">
                <img className='imageCard_Style2' src={ImagePrueba} alt="" />
            </div>
        </div>
    )
}

export default CardPorfolio_style2
