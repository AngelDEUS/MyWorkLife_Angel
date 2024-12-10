import './styleCardP_best.css'
import { useState } from 'react';
//import ImagenMualani from './../../assets/pruebas/mualani_Prueba.jpg'
//import ChibiPrueba from './../../assets/pruebas/mualani_chi_Prueba.png'
import Style1Modal from '../Modals/style_1_modal';

const CardP_Best = ({ title, description, backgroundImage, chibiImage, likes, tags }) => {
    // SET Variables
    var descriptionShow = description;
    const [isModalOpen, setModalOpen] = useState(false);

    // Función para abrir el modal
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="nada">
            {isModalOpen && <Style1Modal onClose={handleCloseModal} />}
            <div className='mainCardP_Best' onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
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
        </div>
    )
}

export default CardP_Best
