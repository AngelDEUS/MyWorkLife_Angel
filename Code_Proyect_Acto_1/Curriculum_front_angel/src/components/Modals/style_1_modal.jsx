import './style_1_modal.css'
import AnimCard from './Anim_01/AnimCard'
import DescAndStats from './DescAndStats/descAndStats'
import MainContentPortfolio from './ContentPorfolio/mainContentPortfolio'
import CardLeftInfo from './CardLeftInfo/cardLeftInfo'

import React, { useEffect, useState } from 'react';

const Style1Modal = ({ onClose }) => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Agregar clase para fade-in al montar el componente
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        // Inicia la animación de fade-out antes de desmontar el componente
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300); // Tiempo igual a la duración de la animación
    };

    return (
        <div className={`mainContainer_ModalS1 ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="degradadoSSS" />
            <div className="leftInfoModal_S1">
                <CardLeftInfo />
            </div>
            <div className="contentCenterAllIn_Modal_S1">
                <div className="contentCenterModal_S1" id='contentModal'>
                    <MainContentPortfolio />
                </div>
                <div className="info_Portfolio_S1" id='infoModal'>
                    <div className="Comments_Content_Modal__S1 tam_S2">
                        <AnimCard />
                    </div>
                    <div className="Comments_Content_ModalS1 tam_S1">
                        <DescAndStats />
                    </div>
                </div>
                {/* <div className="contentComments_ALL" id='commentsModal'>
                    <div className="Comments_Content_ModalS1">
                        <div className="topComments_S1">
                            <div className="circleComment_S1">
                                <i className="bi bi-chat-square-text-fill"></i>
                            </div>
                            <div className="sepComments_S1" />
                        </div>
                        <div className="advertenciaComments_Header">
                            <h1>Comentarios</h1>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="rightOptiosModal_S1">
                <button type="button" className="btnModal_S1">
                    <i className="bi bi-heart-fill"></i>
                </button>
                <button
                    type="button"
                    className="btnModal_S1"
                    onClick={() => scrollToSection('infoModal')}
                >
                    <i className="bi bi-flag-fill"></i>
                </button>
                {/* <button
                    type="button"
                    className="btnModal_S1"
                    onClick={() => scrollToSection('commentsModal')}
                >
                    <i className="bi bi-chat-square-text-fill"></i>
                </button> */}
                <button type="button" className="btnModal_S1 closeModal_S1"
                    onClick={onClose}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default Style1Modal