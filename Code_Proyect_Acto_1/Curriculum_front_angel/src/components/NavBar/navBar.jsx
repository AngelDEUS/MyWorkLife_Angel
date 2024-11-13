import './stylesNavbar.css'

const navBar = () => {
  return (
    <div className='mainNavBar'>
      <div className="contentNavBar">
        <div className="navBar_LeftThgs">
          <div className="spaceNavBar"></div>
          <div className="navBarLogo">
            <span className='logoNavbarrrrr'>Logo</span>
          </div>
        </div>
        <div className="navBar_RightThgs">
          <ul className="navBar_list">
            <li className="navHome_btn">Home</li>
            <li className="navBar_Button">Curriculum</li>
            <li className="navBar_Button">Portfolio</li>
            <li className="navBar_Button">Contac</li>
          </ul>
          <div className="spaceNavBar"></div>
        </div>
      </div>
    </div>
  )
}

export default navBar
