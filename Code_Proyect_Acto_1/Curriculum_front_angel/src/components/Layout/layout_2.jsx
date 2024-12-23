import AppRoutes from '../../Routes/AppRoutes'
import MainNavbarLayout_2 from '../NavBar/navbarLayout_2/mainNavbarLayout_2'
import './stylesLayout_2.css'

const layout_2 = () => {
    return (
        <div className='mainLayout_2'>
            <div className="topLayout_2">
                <MainNavbarLayout_2 />
                <div className="degraded_Behind_Navbar" />
            </div>
            <div className="contentLayout_2">
                <AppRoutes />
            </div>
        </div>
    )
}

export default layout_2

