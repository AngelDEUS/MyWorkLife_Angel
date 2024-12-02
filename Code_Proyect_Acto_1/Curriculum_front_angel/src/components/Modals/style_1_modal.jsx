import './style_1_modal.css'
import FototPP from './../../../public/assets/pruebas/mualani_chi_Prueba.png'

const Style1Modal = () => {
    return (
        <div className="mainContainer_ModalS1">
            <div className="leftInfoModal_S1">
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
                    <p className="descBreveProject_ModalS1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque delectus iste quisquam nisi, quidem totam sequi minus dolor...

                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-nodejs-line colored"></i>
                    </p>
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
            <div className="modalContentFFull_S1">
                <div className="contentCenterModal_S1">
                    xd
                </div>
                <div className="infoAll_ModalS1">
                    <div className="contentCenterModal_S1 modify1_S1">
                        xd
                    </div>
                    <div className="contentCenterModal_S1 modify2_S1">
                        xd
                    </div>
                </div>
                .infoAngel
            </div>
            <div className="rightOptiosModal_S1">
                <button type="button" className="btnModal_S1">
                    <i className="bi bi-heart-fill"></i>
                </button>
                <button type="button" className="btnModal_S1">
                    <i className="bi bi-chat-square-text-fill"></i>
                </button>
                <button type="button" className="btnModal_S1">
                    <i className="bi bi-flag-fill"></i>
                </button>
                <button type="button" className="btnModal_S1 closeModal_S1">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default Style1Modal