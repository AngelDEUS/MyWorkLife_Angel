import { useState } from "react";
import './sstyleAboutMe_Sect_3.css'
import tabsData from "../../inf_testing/tabsInfo.json";

const AboutMe_Sect_3 = () => {
    const { tabsInfo } = tabsData;
    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (id) => {
        setOpenTab(openTab === id ? null : id);
    };

    return (
        <div className='mainAboutMe_Sect_3'>
            <div className="headerInfoGroup">
                <span className="myTop">Mí Top</span>
                <h2 className="subTitle_AboutMe">Habilidades y Conocimientos</h2>
                <div className="sepAboutMe" />
            </div>
            <div className="contentSect3">
                <div className="rightContent">
                    <h3 className="subTitle_AboutMe_2">AriaPSW</h3>
                    <p className="pharagAboutMe">Apoyé el desarrollo y despliegue de aplicaciones en
                        arquitecturas de microservicios utilizando la suite TIBCO (BW
                        6.8/5.14 y TEA).
                        Gestioné y procesé grandes volúmenes de datos con XML y
                        JSON, asegurando su integridad y eficiencia.
                        Realicé pruebas y documentación de servicios utilizando
                        SoapUI y trabajé con entornos Linux para la administración de
                        archivos.
                        Participé en la contenerización y despliegue de servicios,
                        aprendiendo sobre entornos de prueba locales y remotos.
                        Mejoré mi comprensión de tecnologías como AWS Essentials y
                        fundamentos de la nube para apoyar las necesidades del
                        equipo.
                    </p>
                </div>
                <div className="leftContent">
                    {tabsInfo.map((tab) => (
                        <div key={tab.id_tab} className="tabContainer" onClick={() => toggleTab(tab.id_tab)}>
                            <div className="topTabContainer">
                                <div className="headerTopTab">
                                    <span className="tabMessage">{tab.title_tab}</span>
                                    <span className="tabMessage">
                                        <span>{tab.percent_tab}%</span>
                                        <i className={`bi bi-chevron-right rotateI ${openTab === tab.id_tab ? "open" : ""}`} />
                                    </span>
                                </div>
                                <div className="loadingBarTab">
                                    <div className="barRedTab" style={{ width: `${tab.percent_tab}%` }} />
                                </div>
                            </div>
                            <div className={`tabContent ${openTab === tab.id_tab ? "show" : ""}`}>
                                <p className="tabParagraph">{tab.desc_tab}</p>
                                <div className="rrTabContent">
                                    {tab.tags_project.map((tag, index) => (
                                        <span key={index} className="tagTabShow">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe_Sect_3
