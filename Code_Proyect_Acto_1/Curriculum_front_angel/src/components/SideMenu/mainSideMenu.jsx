import { Link } from "react-router-dom";
import "./stylesSideMenu.css";
import routes from "./../../Routes/router";
// import AppRoutes from '../../Routes/AppRoutes';

const MainSideMenu = () => {
  return (
    <div className="mainSideMenu">
      <div className="sideMenuContent">
        <div className="options_SideMenu">
          <div className="upperButton">
            <button type="button" className="buttonMain_Sidemenu">
              <span></span>
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div className="sideMenu_list">
            {routes.map((route) => (
              <Link 
                key={route.path} 
                to={route.path} 
                className="sideMenu_Button"
              >
                {route.alias}
              </Link>
            ))}
          </div>
        </div>
        <div className="publicity_Container">
          <div className="textThings__publicity">
            <span className="tagAsian__publicity">オファー</span>
            <span className="tag__publicity">TRY</span>
            <div className="tittles__publicity">
              <span className="tittle__publicity">ALL IN 50</span>
              <span className="subTittle__publicity">OFF</span>
            </div>
            <p className="textInfo__publicity">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, consectetur asperiores aspernatur, voluptatum aut,
              nobis laborum sunt beatae vitae atque aperiam!
            </p>
            <div className="btns__publicity">
              <button type="button" className="btn_publicity_See">
                See More +
              </button>
              <button type="button" className="btn_publicity_Go">
                Go Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSideMenu;
