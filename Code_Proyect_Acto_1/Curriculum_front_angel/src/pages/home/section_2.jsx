import './stylesSection_2.css'
import ImgTopSec2 from './../../../public/assets/cardAnim/07_Mask_sec2.png'
import { Link } from "react-router-dom";

const Section_2 = () => {
    const myToolsTags = ["ReactJS", "HTML5", "JavaScript (ES13)", "Node.js", "C#", "Python", "MySQL", "SQL Server", "Mongo DB", "Git", "GitHub", "Docker", "Bootstrap", "Tailwindcss", "Express.js",]

    return (
        <div className='main__Section_2'>
            <div className="topContent__Sec2">
                <img src={ImgTopSec2} alt="" className="topImg__Sec2" draggable="false" />
            </div>
            <div className="contentFULL__Sect2">
                <div className="leftContent__Sec2" />
                <div className="rightContent__Sec2">
                    <div className="textContainer__Sect2">
                        <h2 className="tittleSectext__Sect2">¿Quién soy?</h2>
                        <p className="textPhra__Sect2">
                            <span className="marks__Sect2">"</span>
                            Soy Miguel Ángel Ayala o simplemente Ángel NAY, un desarrollador junior especializado en frontend con experiencia en React.js, Node.js, y bases de datos como MySQL y MongoDB. Me apasiona crear aplicaciones interactivas y resolver retos técnicos. Actualmente, busco mejorar continuamente mis habilidades para ofrecer soluciones innovadoras
                            <span className="marks__Sect2">"</span>
                        </p>
                        <Link to="/about" className="link-reset">
                            <span className="learnMore__Sect2">
                                <span className="marks__Sect2">"</span>
                                Conoce más sobre mí
                                <span className="marks__Sect2">"</span>
                                <div className="lineDown__learnMore" />
                            </span>

                        </Link>
                    </div>
                    <div className="textContainer__Sect2">
                        <h2 className="tittleSectext__Sect2" style={{fontSize: "40pt"}}>Mis herramientas favoritas</h2>
                        <p className="textPhra__Sect2">
                            <span className="marks__Sect2">"</span>
                            A lo largo de mi trayectoria, he adquirido un conjunto sólido de herramientas y tecnologías que me permiten transformar ideas en soluciones efectivas. Estas habilidades son la base de mis proyectos, combinando creatividad, lógica y eficiencia para cada desarrollo.
                            <span className="marks__Sect2">"</span>
                        </p>
                        <div className="myBestTools__Sect2">
                            {myToolsTags.map((tool, index) => (
                                <span className="tagTool__Sect2" key={index}>
                                    <div className="circleTool_Sect2" />
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_2
