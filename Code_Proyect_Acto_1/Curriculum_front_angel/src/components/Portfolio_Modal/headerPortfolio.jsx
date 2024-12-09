import './stylesHeaderPortfolio.css'
import LogoHeaderProject from '../../../public/assets/cardAnim/06_logoCard2.png'
import LogoHeaderProjectFront from '../../../public/assets/cardAnim/05_logoCard2.png'

const HeaderPortfolio = () => {
    return (
        <div className="contanerHeaderPortfolio">
            <div className="frontHeader_Portf">
                <div className="tittleDefaultGroup_Portf">
                    <span className="tittleDefault">Mi<span className="flagColor">Proyecto</span></span>
                    <img src={LogoHeaderProjectFront} alt="logoffront.png" className="imgLogoTittle_Portf" />
                </div>
                <h3 className="subtitleNameProject">Sistema de gestión de facturación, ventas e Inventario <span className="tagColorPry01">(SGFVI)</span></h3>
                <i className="bi bi-chevron-compact-down" />
            </div>
            <div className="backHeader_Portf">
                <div className="degrade_BACK" />
                <img src={LogoHeaderProject} alt="logoheader.png" className="logoContentMask_Porft" />
                <span className="backText_Portf">THE PRROJECT</span>
            </div>
        </div>
    )
}

export default HeaderPortfolio
