import "./sttyleMMainNavbarLayout_2.css";
import LogoFront from './../../../../public/assets/cardAnim/05_logoCard2.png'
import LogoBack from './../../../../public/assets/cardAnim/04_logoCard.png'
import { Link } from "react-router-dom";

const MainNavbarLayout_2 = () => {
  return (
    <div className='mainNavbarLayout_2'>
      <div className="contentNavBar_Layout_2">
        <div className="leftContent_Navbar_2">
          <img src={LogoFront} alt="logo.png" className="logoFront_Nvb2" draggable="false"/>
          <img src={LogoBack} alt="logo.png" className="logoBack_Nvb2" draggable="false"/>
        </div>
        <div className="rrightContent_Navbar_2">
          <ul className="listItems_Nvb2">
            <Link to="/home" className="link-reset">
              <li className="item_Nvb2 __activeItm">home</li>
            </Link>
            <Link to="/about" className="link-reset">
              <li className="item_Nvb2">About me</li>
            </Link>
            <Link to="/portfolio" className="link-reset">
              <li className="item_Nvb2">portfolio</li>
            </Link>
            <Link to="/contact" className="link-reset">
              <li className="item_Nvb2">Contact me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainNavbarLayout_2
