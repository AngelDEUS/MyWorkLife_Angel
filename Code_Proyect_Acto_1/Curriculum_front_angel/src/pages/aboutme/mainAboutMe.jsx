import AboutMe_Sect_1 from "./aboutMe_Sect_1.jsx"
import AboutMe_Sect_2 from "./aboutMe_Sect_2.jsx"
import AboutMe_Sect_3 from "./aboutMe_Sect_3.jsx"
import AboutMe_Sect_4 from "./aboutMe_Sect_4.jsx"


const MainAboutMe = () => {
  return (
    <div className='mainAboutMe_S1'
      style={{
        display: 'flex',
        flexDirection: 'column', 
        padding: '5vh 20vh',
        gap: '100px'
      }}>
      <AboutMe_Sect_1 />
      <AboutMe_Sect_2 />
      <AboutMe_Sect_3 />
      <AboutMe_Sect_4 />
    </div>
  )
}

export default MainAboutMe
