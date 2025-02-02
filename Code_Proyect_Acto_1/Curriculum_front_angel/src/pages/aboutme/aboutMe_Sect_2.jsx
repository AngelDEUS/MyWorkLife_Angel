import './styleAboutMe_Sect_2.css'
import IMGHeaderRight from './../../../public/assets/aboutMeImgs/02_SubHeader.png'

const AboutMe_Sect_2 = () => {
  return (
    <div className='mainAboutMe_Sect_2'>
      <div className="topAboutMe__Sect2">
        <div className="resumen">
          <h2 className="subTitle_AboutMe">Mí resumen</h2>
          <p className="pharagAboutMe">
            Soy Miguel Ángel Ayala, desarrollador de software junior apasionado por el desarrollo frontend y con visión de crecimiento hacia
            full-stack. Como Tecnólogo en Desarrollo de Software del SENA,
            he trabajado con tecnologías como React.js, Node.js, MySQL y
            MongoDB, creando soluciones web funcionales y dinámicas.
            Estoy comprometido con el aprendizaje continuo y aportaré
            creatividad, innovación y un enfoque orientado a resultados en
            cada proyecto.
          </p>
        </div>
        <img src={IMGHeaderRight} alt="IMGHeaderRight.png" className="headerIMGRight" />
      </div>
      <div className="myExpAndEdu">
        <div className="groupInfo__Sect">
          <div className="headerInfoGroup">
            <h2 className="subTitle_AboutMe">Experiencia</h2>
            <div className="sepAboutMe" />
          </div>
          <div className="subGroupInf__SS">
            <div className="left_info">L</div>
            <div className="right_info">
              <h3 className="subTitle_AboutMe_2">AriaPSW</h3>
              <span className="subSUBTitle_AboutMe">2024 Jul. - 2025 Ene.</span>
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
                equipo.</p>
            </div>
          </div>
        </div>
        <div className="groupInfo__Sect">
          <div className="headerInfoGroup">
            <h2 className="subTitle_AboutMe">Educación</h2>
            <div className="sepAboutMe" />
          </div>
          <div className="subGroupInf__SS">
            <div className="left_info">L</div>
            <div className="right_info">
              <h3 className="subTitle_AboutMe_2">AriaPSW</h3>
              <span className="subSUBTitle_AboutMe">2024 Jul. - 2025 Ene.</span>
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
                equipo.</p>
            </div>
          </div>
          <div className="subGroupInf__SS">
            <div className="left_info">L</div>
            <div className="right_info">
              <h3 className="subTitle_AboutMe_2">AriaPSW</h3>
              <span className="subSUBTitle_AboutMe">2024 Jul. - 2025 Ene.</span>
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
                equipo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe_Sect_2
