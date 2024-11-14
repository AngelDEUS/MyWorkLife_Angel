import React from 'react'
import './stylesSideMenu.css'

const MainSideMenu = () => {
    return (
        <div className='mainSideMenu'>
            <div className="sideMenuContent">
                <div className="options_SideMenu">
                    <div className="upperButton">
                        <button type="button" className='buttonMain_Sidemenu'>
                            <span></span>
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                    <div className="sideMenu_list">
                        <span className="sideMenu_Button">Home</span>
                        <span className="sideMenu_Button">About Me</span>
                        <span className="sideMenu_Button">Portfolio</span>
                        <span className="sideMenu_Button">Contac me</span>
                    </div>
                </div>
                <div className="publicity_Container">
                    <div className="textThings__publicity">
                        <span className="tagAsian__publicity">オファー</span>
                        <span className='tag__publicity'>TRY</span>
                        <div className="tittles__publicity">
                            <span className='tittle__publicity'>ALL IN 50</span>
                            <span className='subTittle__publicity'>OFF</span>
                        </div>
                        <p className="textInfo__publicity">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur asperiores aspernatur, voluptatum aut, nobis laborum sunt beatae vitae atque aperiam!
                        </p>
                        <div className="btns__publicity">
                            <button type="button" className="btn_publicity_See">See More +</button>
                            <button type="button" className="btn_publicity_Go">Go Offer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSideMenu
