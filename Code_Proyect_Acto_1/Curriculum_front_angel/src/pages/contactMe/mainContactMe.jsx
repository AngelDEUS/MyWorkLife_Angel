import './styleMainContactMe.css'
import BackgroundIMG from './../../../public/assets/cardAnim/04_logoCard.png'

const MainContactMe = () => {

  const LIST__DATA = [
    { id: "1", value: "Desarrollo Frontend" },
    { id: "2", value: "Diseño Web" },
    { id: "3", value: "Sistemas Personalizados" },
    { id: "4", value: "Diseño de Experiencia de Usuario (UX/UI)" },
    { id: "5", value: "Contenido para Redes Sociales" },
    { id: "6", value: "Consultoría Técnica" },
    { id: "7", value: "Ilustración" },
    { id: "8", value: "Edición y creación Multimedia" },
  ]

  const handleSelect = (event) => {

  }

  return (
    <div className='mainContactMe'>
      <div className="fullSubContent_CtmMe">
        <div className="left__CtmMe">
          <div className="contentLeftFull">
            <h3 className="title1__CtmMe"><span className="clueMark">¿</span>Listo para
              conectarnos<span className="clueMark">?</span></h3>
            <div className="groupInfo__CtmMe">
              <div className="nameTag__CtmMe">
                <i className="bi bi-lightning-charge-fill" />
                <h4 className="subTitle__CtmMe">Creatividad sin límites</h4>
              </div>
              <p className="contextInfo__CtmMe">Además de desarrollo web, diseño contenido visual, edito videos y trabajo con herramientas 3D como Blender.</p>
            </div>
            <div className="groupInfo__CtmMe">
              <div className="nameTag__CtmMe">
                <i className="bi bi-lightning-charge-fill" />
                <h4 className="subTitle__CtmMe">Soluciones personalizadas</h4>
              </div>
              <p className="contextInfo__CtmMe">Ya sea un sistema de gestión o una campaña visual para redes sociales, adapto cada proyecto a tus necesidades.</p>
            </div>
            <div className="groupInfo__CtmMe">
              <div className="nameTag__CtmMe">
                <i className="bi bi-lightning-charge-fill" />
                <h4 className="subTitle__CtmMe">Pasión por lo que hago</h4>
              </div>
              <p className="contextInfo__CtmMe">La tecnología y el diseño son mi pasión, y eso se refleja en cada proyecto que desarrollo.</p>
            </div>
          </div>
          <div className="iconsLinksGo__CtmMe">
            <i className="devicon-twitter-original" />
            <i className="devicon-linkedin-plain" />
            <i className="devicon-behance-plain" />
          </div>
        </div>
        <div className="right__CtmMe">
          <div className="sectionTop__CtmMe">
            <img src={BackgroundIMG} alt="" className="rightLogo__CtmMe" />
            <h2 className="anyProject__CtmMe">¿Tienes un proyecto en mente?
              Conéctate conmigo.</h2>
            <p className="exp__CtmMe">"Rellena el formulario y me pondré en contacto contigo lo antes posible."</p>
          </div>
          <div className="sectionInputsShorts__CtmMe">
            <div className="inputGroup__CtmMe">
              <label htmlFor="input1" className='labelInput__CtmMe'>Nombre Completo (*)</label>
              <input type="text" name="input1" id="input1" className='inputClass'
                placeholder='Nombre de Empresa o Encargado' />
            </div>
            <div className="inputGroup__CtmMe">
              <label htmlFor="input2" className='labelInput__CtmMe'>Correo Electrónico (*)</label>
              <input type="text" name="input2" id="input2" className='inputClass'
                placeholder='ejemplo@ejemplo.com' />
            </div>
            <div className="inputGroup__CtmMe">
              <label htmlFor="input3" className='labelInput__CtmMe'>Asunto Asunto (~)</label>
              <input type="text" name="input3" id="input3" className='inputClass'
                placeholder='¿Sobre qué te gustaría hablar?' />
            </div>
            <div className="inputGroup__CtmMe">
              <label htmlFor="input4" className='labelInput__CtmMe'>Número de Teléfono (~)</label>
              <input type="text" name="input4" id="input4" className='inputClass'
                placeholder='+ 57 333 3333333' />
            </div>
          </div>
          <div className="inputGroup__CtmMe">
            <label htmlFor="input5" className='labelInput__CtmMe'>Mensaje (*)</label>
            <textarea name="textarea1" id="input5" className='inputClass'
              placeholder='Describe brevemente tu idea, proyecto o consulta' />
          </div>
          <div className="sectionselectMore__CtmMe">
            <label htmlFor="input6" className='labelInput__CtmMe'>¿Cómo puedo ayudarte? (*)</label>
            <div className="checkItems__CtmMe">
              <div className="list_ItemsSelects__CtmMe">
                {LIST__DATA.map((item) => {
                  return (
                    <div key={item.id} className="checkBox_Container">
                      <input
                        type="checkbox"
                        name="optCheck1"
                        id={item.id}
                        value={item.value}
                        className='checkItem'
                        onChange={handleSelect}
                      />
                      <label htmlFor={item.id} className='labelcheck__CtmMe'>{item.value}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <button className="btnForm__CtmMe">Contáctame Ahora</button>
          <div className="backGround__CtmMe">
            <img src={BackgroundIMG} className="BackgroundIMG_CtmMe" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContactMe


