import React from 'react'
import MyPhotografy from "../../assets/potography/PP_2_recorted.jpg";
import './stylesCurriculum.css'

const infoCurriculum = () => {
  return (
        <div className="cardCurriculum">
          <div className="contentCardCurriculum">
            <div className="leftCardCurriculum">
              <div className="nadaLeff"></div>
              <img className='profilePictureStle' src={MyPhotografy} alt="PP_Photo" />
            </div>
            <div className="rightCardCurriculum">
              <div className="hiPlusName">
                <div className="centerTag">
                  <div className="helloThere">
                    <span className='hlTh'>Hello There!</span>
                  </div>
                  <div className="tiangreThere"></div>
                </div>
                <div className="tittleCard">
                  <h2 className='tittleMyNameIM'>I'm</h2>
                  <h2 className='tittleMyName'>Angel Ayala</h2>
                </div>
              </div>
              <div className="sepCardBar"></div>
              <div className="rightDownInfo">
                <div className="groupInfo_Left">
                  <span className="textInfo_Tittle">Age:</span>
                  <span className="textInfo_Tittle">Across:</span>
                  <span className="textInfo_Tittle">E-Mail:</span>
                  <span className="textInfo_Tittle">Phone:</span>
                  <span className="textInfo_Tittle">Job Position:</span>
                  <span className="textInfo_Tittle">State:</span>
                </div>
                <div className="groupInfo_Right">
                  <span className="textInfo_Info">24</span>
                  <span className="textInfo_Info">Cl 26 Sur #73 B - 46, Bogotá D.C, Colombia</span>
                  <span className="textInfo_Info">Angel.Aya.Pin.00@gmail.com</span>
                  <span className="textInfo_Info">+57 3224188231</span>
                  <span className="textInfo_Info">Junior Developer</span>
                  <span className="tagStateWork">Working</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footerCard">
            <button type="button" className="buttonsContainer">
              <i class="bi bi-linkedin"></i>
            </button>
            <button type="button" className="buttonsContainer">
              <i class="bi bi-whatsapp"></i>
            </button>
            <button type="button" className="buttonsContainer">
              <i class="bi bi-behance"></i>
            </button>
            <button type="button" className="buttonsContainer">
              <i class="bi bi-envelope-fill"></i>
            </button>
          </div>
        </div>
  )
}

export default infoCurriculum