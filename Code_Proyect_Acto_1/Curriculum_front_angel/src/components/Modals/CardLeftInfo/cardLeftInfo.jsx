import React from 'react'
import FototPP from './../../../../public/assets/pruebas/mualani_chi_Prueba.png'
import './stylesCardLeftInfo.css'

const CardLeftInfo = () => {
    return (
        <div className='mainCardLeftInfo_S1'>
            <div className="topLeftInfo_S1">
                <img src={FototPP} alt="" className="profilePicture_ModalS1" />
                <div className="authorInf_ModalS1">
                    <span className="tittleName_ModalS1">Angel NAY</span>
                    <span className="tittlePlace_ModalS1">Bogotá D.C, Colombia.</span>
                </div>
            </div>
            <div className="leftCenterInfo_ModalS1">
                <div className="nameProject_ModalS1">
                    <span className="dateProject">2024/11/24</span>
                    <h3 className='titleProject_ModalS1'>Nombre del Proyecto aqui!!</h3>
                </div>
                <p className="descBreveProject_ModalS1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque delectus iste quisquam nisi, quidem totam sequi minus dolor...</p>
                <div className="groupAppsInfo_leftS1">
                    <div className="dividerLeftInfo_S1" />
                    <div className="containerAppsInfo_S1">
                        <span className="labelAppsInfo">Aplicaciones y Tecnologías</span>
                        <div className="contanerIcons_LeftS1">
                            <i className="devicon-photoshop-plain" />
                            <i className="devicon-aftereffects-plain" />
                            <i className="devicon-illustrator-plain" />
                            <i className="devicon-figma-plain" />|
                            <i className="devicon-react-original" />
                            <i className="devicon-nodejs-plain" />
                            <i className="devicon-express-original" />
                        </div>
                    </div>
                </div>
                <div className="groupAppsInfo_leftS1">
                    <div className="dividerLeftInfo_S1" />
                    <div className="containerAppsInfo_S1">
                        <span className="labelAppsInfo">Lenguajes</span>
                        <div className="contanerIcons_LeftS1">
                            <i className="devicon-javascript-plain" />
                            <i className="devicon-mysql-original" />
                            <i className="devicon-mongodb-plain-wordmark" />
                            <i className="devicon-json-plain" />
                            <i className="devicon-express-original" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomLeftInf_S1">
                <div className="itemInffoProyct_S1">
                    <i className="bi bi-heart-fill"></i>
                    <span className="numberInf_S1">102</span>
                </div>
                <div className="itemInffoProyct_S1">
                    <i className="bi bi-eye-fill"></i>
                    <span className="numberInf_S1">349</span>
                </div>
                <div className="itemInffoProyct_S1">
                    <i className="bi bi-chat-square-text-fill"></i>
                    <span className="numberInf_S1">12</span>
                </div>
            </div>
        </div>
    )
}

export default CardLeftInfo
