import './StylesCards.css'
import ImageCard from './../../assets/potography/PP_2_recorted.jpg'

const CardForPortfolio = () => {
    const tittleCard = 'Titulo del tarjet';
    const subTittleCard = '14'
    const descriptionCard = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni itaque maxime sed dolor fuga eum. Dignissimos, vitae earum. Reiciendis voluptate sed necessitatibus nemo eum dignissimos sequi quisquam accusamus sapiente consequatur.'
    const imageCard = ImageCard;

    return (
        <div className='mainCard' draggable="true">
            <div className="topCard">
                <img className='imageCoverCard' src={imageCard} alt="" />
            </div>
            <div className="contendTextCard">
                <div className="headerCardInfo">
                    <span className='tittleCard'>{tittleCard}</span>
                    <div className="stadisticsProyect">
                        <div className="groupItemStadistics">
                            <i class="bi bi-eye"></i>
                            <span className='subTittleCard'>{subTittleCard}</span>
                        </div>
                        <div className="groupItemStadistics">
                            <i class="bi bi-star"></i>
                            <span className='subTittleCard'>{subTittleCard}</span>
                        </div>
                    </div>
                </div>
                <span className='descriptionCard'>{descriptionCard}</span>
            </div>
        </div>
    )
}

export default CardForPortfolio
