import './styleAboutMe_Sect_4.css'
import LogoSect4 from './../../../public/assets/aboutMeImgs/04_logoCard_ssss.png'
import SignatureService from './../../../public/assets/aboutMeImgs/Signature.png'
import BackgrounCardService from './../../../public/assets/aboutMeImgs/imgsServices/01_Servicee_Background.jpg'

const AboutMe_Sect_4 = () => {
    return (
        <div className='mainAboutMe_Sect_4'>
            <div className="topAboutMe_4">
                <div className="headerInfoGroup">
                    <div className="sepAboutMe" />
                </div>
                <div className="contentTopSect_4">
                    <div className="llSect_4">
                        <h3 className="subTitle_AboutMe_2" style={{ fontSize: '16pt', marginBottom: '10px', marginTop: '20px' }}>¿Estas listo y deseas saber más?</h3>
                        <p className="pharagAboutMe">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laboriosam numquam ipsa aliquid! Doloribus ad delectus accusantium esse sapiente quod eius nostrum cupiditate laborum quis! Culpa harum ab aspernatur. Rerum beatae illum consectetur, dolore ipsa nemo soluta. Delectus, doloribus reprehenderit! Quasi, exercitationem vel corporis provident in, explicabo culpa quisquam nemo cumque, perferendis vitae omnis ratione? Ex explicabo blanditiis itaque quibusdam repellendus., eius aspernatur? Nostrum ipsam nemo natus esse velit quaerat magni, autem odio! Unde eum labore libero minus distinctio porro. Nam quis unde obcaecati nesciunt dignissimos iste cum sunt autem vitae veniam repudiandae libero voluptates quasi, fugit tenetur non qui eveniet voluptatibus blanditiis quidem expedita aut error.
                        </p>
                        <button className="classBTN_SS4">Charlemos al respecto un poco más</button>
                    </div>
                    <div className="rrSect_4">
                        <img src={LogoSect4} alt="logoSect4.png" className="LogoSect4" draggable='false' />
                    </div>
                </div>
            </div>
            <div className="content2AboutMe_4">
                <div className="headerInfoGroup">
                    <h2 className="subTitle_AboutMe">Servicios</h2>
                    <div className="sepAboutMe" />
                </div>
                <div className="subContent_S4">
                    <h3 className="subTitle_AboutMe_2">¿Servicios personalizados y encargos?</h3>
                    <p className="pharagAboutMe">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, aliquam! Corrupti porro veritatis rerum facere consectetur illo, expedita vero nostrum sint velit dolorum architecto dolore ratione, culpa repellat amet laboriosam? Quisquam nobis amet harum deserunt reprehenderit, odit reiciendis eligendi impedit et dolor aperiam consequuntur ab incidunt ad doloribus a delectus labore saepe velit perspiciatis cupiditate perferendis facere dolore? Quasi neque, ipsum voluptatum accusantium tempore nihil dolore fugit quod corporis officiis modi, natus labore doloribus praesentium culpa assumenda sint architecto, maiores odio harum quidem asperiores! Atque corrupti alias at numquam voluptatem est sed accusamus officiis. Debitis libero similique iste consequatur inventore unde quis labore architecto. Vel sapiente placeat aperiam officia pariatur quam suscipit porro optio, illo harum aut, facere ex laudantium quasi similique maxime dicta unde asperiores odit distinctio! Commodi provident quod et dolore dolorem, doloribus animi? Quaerat vel rem sunt sint quisquam dolore quidem! Nam aperiam animi minus, libero quia odit saepe eum enim eligendi debitis! Suscipit cumque explicabo fuga quibusdam velit eligendi, voluptates assumenda vel eveniet unde molestias. Exercitationem ratione et autem architecto maxime dicta porro sit, optio quasi. Asperiores inventore earum, amet obcaecati quis optio. Praesentium, facere perspiciatis?
                    </p>
                </div>
                <div className="contentervices_S4">
                    <div className="cardService activeCard">
                        <div className="contentService">
                            <div className="frontInfoService">
                                <h2 className="titleService">
                                    Servicio para
                                    <span className="showRedS">Streaming</span>
                                </h2>
                                <p className="expServiceFF">Servicio de crreación de identidad visual,
                                    Animación de Alertas, Panels, Pantallas, etc...</p>
                                <div className="styleImg_S4">
                                    <img src={SignatureService} alt="signatureService.png" className="signatureService" draggable='false' />
                                </div>
                            </div>
                            <div className="backInfoService">
                                <h2 className="titleService">
                                    Servicio para
                                    <span className="showRedS">Streaming</span>
                                </h2>
                                <p className="expServiceFF">
                                    Contenido Visual animado o estatico para streams en cualquier plataforma, totalmente personalizados al gusto, estilo o necesidades, al elegir este servicio principal podrá escoger el tipo de diseño, estilo, plantilla o inspiración, al comenzar y contrataar este servicio entrará en cola segun el numeró de pedidos y se le indicará su turno.
                                </p>
                                <span className='possibleThings'>Posibles neceidades:</span>
                                <ul className="listService">
                                    <li className="itemService">Twitch Overlay</li>
                                    <li className="itemService">Kick Full Overlay</li>
                                    <li className="itemService">Youtube Overlay</li>
                                    <li className="itemService">Facebook Overlay</li>
                                    <li className="itemService">GamePlay Overlay</li>
                                    <li className="itemService">Pantallas Animadas</li>
                                    <li className="itemService">Pantalla Starting</li>
                                    <li className="itemService">Pantalla BRB</li>
                                    <li className="itemService">Pantalla Ending</li>
                                    <li className="itemService">Pantalla con Live Chat</li>
                                    <li className="itemService">Alertas Animadas</li>
                                    <li className="itemService">Diseño de Paneles</li>
                                    <li className="itemService">Emotes Personalizados</li>
                                    <li className="itemService">Insignias Personaliza...</li>
                                    <li className="itemService">Diseño de logo o PP</li>
                                </ul>
                            </div>
                        </div>
                        <div className="backgroundService">
                            <img src={BackgrounCardService} alt="backgrounCardService.png" className="backgrounCardService" />
                        </div>
                    </div>
                </div>
                <div className="footerFinally">
                    <div className="headerInfoGroup">
                        <h2 className="subTitle_AboutMe">Redes sociales</h2>
                        <div className="sepAboutMe" />
                    </div>
                    <div className="myNetWorksFooter">
                        <button className="btnNetwork">
                            <span>
                                <i className="bi bi-linkedin" />
                                Diseños/@nay_nawy
                            </span>
                            <i className="bi bi-chevron-right" />
                        </button>
                        <button className="btnNetwork">
                            <span>
                                <i className="bi bi-twitter-x" />
                                /in/AngelAyala-Nay
                            </span>
                            <i className="bi bi-chevron-right" />
                        </button>
                        <button className="btnNetwork">
                            <span>
                                <i className="bi bi-github" />
                                @AngelDEUS
                            </span>
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe_Sect_4
