import './stylesSection_3.css'
import ProfilePicture_Sect3 from './../../../public/assets/pruebas/Luna_Rurine_Chibi.png'

import MyFeaturedProjects from './../../inf_testing/cardsHomeProyects.json'
import Section_3_5 from './section_3_5';

const Section_3 = () => {
    const projects = [...MyFeaturedProjects.mainProjects, ...MyFeaturedProjects.mainProjects, ...MyFeaturedProjects.mainProjects];

    return (
        <div className='main__Section_3'>
            <div className="gradientSection_3" />
            <div className="content__Sect3">
                <div className="topProyects__Sect3">
                    <div className="upperSep__Sect3">
                        <div className="lineSep__Sect3" />
                        <div className="coverPicturre__Sect3">
                            <img src={ProfilePicture_Sect3} className="profilePicture__Sect3" draggable="false" />
                        </div>
                    </div>
                    <div className="downInffo_Sect3">
                        <h4 className="subTittle__Sect_3">Proyectos destacados</h4>
                        <p className="paragh__Sect_3">
                            Aquí encontrarás algunos de los sistemas de gestión, proyectos y aplicaciones que he desarrollado.
                            <i className="bi bi-stars" />
                        </p>
                        <button className="seeProyectsBTN__Sect_3">
                            Ver Proyectos
                        </button>
                    </div>
                </div>
                {/* <div className="downProyectsCards__Sect3" draggable="false">
                    <div className="carousel__Sect3">
                        <div className="carousel-track__Sect3">
                            {projects.map((project, index) => (
                                <div key={index} className="cardProyectEnjoy__Sect3">
                                    <img
                                        src={`./../../assets/pruebas/${project.src_bg_project}`}
                                        alt={`${project.title_project} Cover`}
                                        className="topCoverProyectIMG__Sect3"
                                        draggable="false"
                                    />
                                    <span className="tittleCarrdProyect__Sect3">
                                        {project.title_project}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Section_3
